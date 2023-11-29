package com.spring.angular.services;

import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.models.Pelicula;
import com.spring.angular.models.PeliculaReport;
import com.spring.angular.repositories.PeliculaRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.angular.exceptions.ResourceNotFoundException;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.Map;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;


@Service
public class PeliculaService {
	
	@Autowired
	private PeliculaRepository repoPelicula;
	
	public List<Pelicula> listarPeliculas(){
		return repoPelicula.findAll();
	}
	
	/* Registra y actualiza la entidad pelicula */
	public Pelicula guardarPelicula(Pelicula pelicula) {
		return repoPelicula.save(pelicula);
	}
	
	public Pelicula obtenerPeliculaPorId(Integer id) {
		return repoPelicula.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe la pelicula con el ID : " + id));
	}
	
	public void eliminarPeliculaPorId(Integer id) {
		Pelicula pelicula = repoPelicula.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe la pelicula con el ID : " + id));
		repoPelicula.delete(pelicula);
	}
	
	public Pelicula convertJsonToMovie(String stringPeli) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        Pelicula pelicula = objectMapper.readValue(stringPeli, Pelicula.class);
        return pelicula;
    }
	
	public List<Pelicula> buscarPeliculaPorTitulo(String titulo) {
		return repoPelicula.findByTituloContainingIgnoreCase(titulo);
	}
	
	public List<Pelicula> buscarPeliculaPorAnio(int anio) {
		return repoPelicula.findByAnio(anio);
	}
	
	public List<Pelicula> obtenerRegistrosParaExportar() {
	    return repoPelicula.obtenerRegistrosParaExportar();
	}
	
	public InputStream getPeliculaReport(List<Pelicula> peliculas, Map<String, Object> parameters) throws JRException {
	    List<PeliculaReport> listData = new ArrayList<PeliculaReport>();
	    listData.add(new PeliculaReport(peliculas));

	    JRBeanCollectionDataSource dts = new JRBeanCollectionDataSource(listData);

	    try {
	        // Utiliza el nombre del informe JasperReports que contiene los campos del DataSet de tabla
	        JasperPrint jPrint = JasperFillManager.fillReport(getClass().getResourceAsStream("/jasper/ReportePeliculasPDF.jasper"), parameters, dts);
	        return new ByteArrayInputStream(JasperExportManager.exportReportToPdf(jPrint));
	    } catch (JRException e) {
	        throw e;
	    }
	}
	
	public List<Pelicula> findByPeliculaGeneroIdGenero(int codCategoria) {
		return repoPelicula.findByPeliculaGeneroIdGenero(codCategoria);
	}
}
