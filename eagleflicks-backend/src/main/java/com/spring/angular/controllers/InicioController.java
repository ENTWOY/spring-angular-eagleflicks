package com.spring.angular.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.models.Pelicula;
import com.spring.angular.services.PeliculaService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/home")
public class InicioController {

	@Autowired
	private PeliculaService serviPelicula;
	
	/* Listado de peliculas en reversa de catalogo en la vista de inicio */
	@GetMapping("/pelicula")
	 public List<Pelicula> listadoPeliculas() {
		List<Pelicula> peliculas = serviPelicula.listarPeliculas();
	    Collections.reverse(peliculas);
	    return peliculas;
	}
	
	/* Listado Aleatorio de peliculas en vista "sorprendeme" */
	@GetMapping("/sorprendeme")
	public List<Pelicula> peliculasAleatorias() {
	    List<Pelicula> todasLasPeliculas = serviPelicula.listarPeliculas();

	    // si hay al menos 3 películas en la lista completa
	    if (todasLasPeliculas.size() < 3) {
	        return todasLasPeliculas;
	    } else {
	        List<Pelicula> peliculasAleatorias = new ArrayList<>();
	        List<Integer> indicesSeleccionados = new ArrayList<>();

	        Random random = new Random();

	        // Bucle para seleccionar películas aleatorias de la lista completa
	        for (int i = 0; i < 3; i++) {
	            int indiceAleatorio;
	            Pelicula peliculaAleatoria;

	            do {
	                indiceAleatorio = random.nextInt(todasLasPeliculas.size());
	            } while (indicesSeleccionados.contains(indiceAleatorio));

	            indicesSeleccionados.add(indiceAleatorio);
	            peliculaAleatoria = todasLasPeliculas.get(indiceAleatorio);
	            peliculasAleatorias.add(peliculaAleatoria);
	        }
	        return peliculasAleatorias;
	    }
	}
	
	@GetMapping("/similar")
	public List<Pelicula> peliculasSimilar() {
	    List<Pelicula> peli = serviPelicula.listarPeliculas();
	    if (peli.size() < 4) {
	        return peli;
	    } else {
	        List<Pelicula> peliculasAleatorias = new ArrayList<>();
	        List<Integer> indicesSeleccionados = new ArrayList<>();
	        Random random = new Random();
	        for (int i = 0; i < 4; i++) {
	            int indiceAleatorio;
	            Pelicula peliculaAleatoria;
	            do {
	                indiceAleatorio = random.nextInt(peli.size());
	            } while (indicesSeleccionados.contains(indiceAleatorio));

	            indicesSeleccionados.add(indiceAleatorio);
	            peliculaAleatoria = peli.get(indiceAleatorio);
	            peliculasAleatorias.add(peliculaAleatoria);
	        }
	        return peliculasAleatorias;
	    }
	}
	
	/* Detalles segun ID en la  vista de ver-pelicula */
	@GetMapping("/pelicula/{id}")
	public ResponseEntity<Pelicula> obtenerPeliculaPorId(@PathVariable Integer id) {
		Pelicula pelicula = serviPelicula.obtenerPeliculaPorId(id);
		return ResponseEntity.ok(pelicula);
	}
	
	/* Buscar Pelicula X titulo en la vista de biblioteca-peliculas */
	@GetMapping("/pelicula/buscar")
	public ResponseEntity<List<Pelicula>> searchMoviesByTitle(@RequestParam String titulo) {
		List<Pelicula> pelicula = serviPelicula.buscarPeliculaPorTitulo(titulo);
		return ResponseEntity.ok(pelicula);
	}
	
	/* Buscar Pelicula X anio en la vista de biblioteca-peliculas */
	@GetMapping("/pelicula/obtener")
	public ResponseEntity<List<Pelicula>> searchMoviesByYear(@RequestParam int anio) {
		List<Pelicula> pelicula = serviPelicula.buscarPeliculaPorAnio(anio);
		return ResponseEntity.ok(pelicula);
	}
}
