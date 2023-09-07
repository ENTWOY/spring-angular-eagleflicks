package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.models.Pelicula;
import com.spring.angular.repositories.PeliculaRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.angular.exceptions.ResourceNotFoundException;

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
}
