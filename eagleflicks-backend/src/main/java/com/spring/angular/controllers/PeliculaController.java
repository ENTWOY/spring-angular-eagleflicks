package com.spring.angular.controllers;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.angular.models.Actor;
import com.spring.angular.models.Director;
import com.spring.angular.models.Genero;
import com.spring.angular.models.Pais;
import com.spring.angular.models.Pelicula;
import com.spring.angular.services.ActorService;
import com.spring.angular.services.DirectorService;
import com.spring.angular.services.GeneroService;
import com.spring.angular.services.PaisService;
import com.spring.angular.services.PeliculaService;
import com.spring.angular.services.UploadFileService;

import net.sf.jasperreports.engine.JRException;

@RestController
@RequestMapping("/api/movie/")
@CrossOrigin(origins = "http://localhost:4200")
public class PeliculaController {

	@Autowired
	private PeliculaService serviPelicula;
	
	@Autowired
	private DirectorService serviDirector;
	
	@Autowired
	private PaisService serviPais;
	
	@Autowired
	private GeneroService serviGenero;
	
	@Autowired
	private ActorService serviActor;
	
	@Autowired
	private UploadFileService serviUploadFile;
	
	@GetMapping("/pelicula")
	 public List<Pelicula> listadoPeliculas() {
       return serviPelicula.listarPeliculas();
	}
	
	@GetMapping("/pais")
	 public List<Pais> listadoPaises() {
      return serviPais.listarPaises();
	}
	
	@GetMapping("/director")
	 public List<Director> listadoDirector() {
     return serviDirector.listarDirectores();
	}
	
	@GetMapping("/genero")
	 public List<Genero> listadoGeneros() {
     return serviGenero.listarGeneros();
	}
	
	@GetMapping("/actor")
	 public List<Actor> listadoActores() {
    return serviActor.listarActores();
	}
	
	/* Registra y actualiza la información de una película, incluyendo la gestión de su imagen asociada. */
	@PostMapping(value=("/pelicula"), consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE })
	public ResponseEntity<?> create(@RequestPart("stringPeli") String stringPeli, @RequestPart("file") MultipartFile image){
		try {
			Pelicula objPeli = serviPelicula.convertJsonToMovie(stringPeli);
			if (!image.isEmpty()) {
				if (objPeli.getIdPelicula() > 0 && objPeli.getImagen() != null && objPeli.getImagen().length() > 0) {
					serviUploadFile.delete(objPeli.getImagen());
				}
				String imageUrl = serviUploadFile.copy(image);
				objPeli.setImagen(imageUrl);
			}  
			serviPelicula.guardarPelicula(objPeli);
			return ResponseEntity.ok(null);
		} catch (Exception e) {
			return ResponseEntity.internalServerError().body(e);
		}
	}
	
	/* Obtiene la imagen de la carpeta "uploads" y la muestra. */
	@GetMapping(value = "/uploads/{filename}")
	public ResponseEntity<Resource> goImage(@PathVariable String filename) {
		Resource resource = null;
		try {
			resource = serviUploadFile.load(filename);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}
	
	@GetMapping("/pelicula/{id}")
	public ResponseEntity<Pelicula> obtenerPeliculaPorId(@PathVariable Integer id) {
		Pelicula pelicula = serviPelicula.obtenerPeliculaPorId(id);
		return ResponseEntity.ok(pelicula);
	}


	/* Elimina la entidad película junto con su imagen asociada. */
	@DeleteMapping("/pelicula/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarPelicula(@PathVariable Integer id) {
		Pelicula objPeli = serviPelicula.obtenerPeliculaPorId(id);

	    if (objPeli == null) {
	        Map<String, Boolean> respuesta = new HashMap<>();
	        respuesta.put("eliminar", Boolean.FALSE);
	        return ResponseEntity.ok(respuesta);
	    }

	    // Obtener la ruta de la imagen asociada
	    String imagePath = objPeli.getImagen();

	    // Eliminar la entidad
	    serviPelicula.eliminarPeliculaPorId(id);

	    // Eliminar la imagen asociada si existe
	    if (imagePath != null) {
	        // Utilizar el servicio para eliminar la imagen
	        boolean imagenEliminada = serviUploadFile.delete(imagePath);

	        if (imagenEliminada) {
	            Map<String, Boolean> respuesta = new HashMap<>();
	            respuesta.put("eliminar", Boolean.TRUE);
	            return ResponseEntity.ok(respuesta);
	        } else {
	            // Si no se pudo eliminar la imagen, puedes manejar el error de alguna manera
	            // Por ejemplo, puedes devolver un código de error HTTP apropiado
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	        }
	    } else {
	        Map<String, Boolean> respuesta = new HashMap<>();
	        respuesta.put("eliminar", Boolean.TRUE);
	        return ResponseEntity.ok(respuesta);
	    }
	}
	
	@GetMapping("/pelicula/pelicula_report_pdf")
	public ResponseEntity<ByteArrayResource> generateAllRegistrosPdf() throws IOException, JRException {
	    List<Pelicula> allPeliculas = serviPelicula.listarPeliculas(); // Obtener todas las películas

	    // Verificar si hay películas para generar el informe
	    if (allPeliculas.isEmpty()) {
	        // Manejar el caso en el que no hay películas disponibles, por ejemplo, lanzar una excepción o mostrar un mensaje de error.
	        // Aquí se muestra cómo devolver una respuesta vacía con un código de estado 204 (No Content).
	        return ResponseEntity.noContent().build();
	    }

	    Map<String, Object> parameters = new HashMap<>();
	    parameters.put("IMAGE_PATH", "https://drive.google.com/uc?export=view&id=166I4OhtsyyVzl5IRn74q1VM9WMwpzqmp");

	    InputStream pdfStream = serviPelicula.getPeliculaReport(allPeliculas, parameters);
	    byte[] data = pdfStream.readAllBytes();
	    pdfStream.close();

	    HttpHeaders headers = new HttpHeaders();
	    headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=reporte_peliculas.pdf");
	    headers.setContentType(MediaType.APPLICATION_PDF);
	    headers.setContentLength(data.length);

	    return ResponseEntity.ok().headers(headers).body(new ByteArrayResource(data));
	}
	
	/* Busca películas por el ID de género. */
	@GetMapping("/buscar/genero")
	public ResponseEntity<List<Pelicula>> findByPeliculaGeneroIdGenero(@RequestParam int codGenero) {
		List<Pelicula> pelicula = serviPelicula.findByPeliculaGeneroIdGenero(codGenero);
		return ResponseEntity.ok(pelicula);
	}
}
