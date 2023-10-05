package com.spring.angular.controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.models.Pelicula;
import com.spring.angular.services.PeliculaService;

@RestController
@RequestMapping("/api/home/")
@CrossOrigin(origins = "http://localhost:4200")
public class InicioController {

	@Autowired
	private PeliculaService serviPelicula;
	
	@GetMapping("/pelicula")
	 public List<Pelicula> listadoPeliculas() {
		List<Pelicula> peliculas = serviPelicula.listarPeliculas();
	    Collections.reverse(peliculas);
	    return peliculas;
	}
	
	@GetMapping("/pelicula/{id}")
	public ResponseEntity<Pelicula> obtenerPeliculaPorId(@PathVariable Integer id) {
		Pelicula pelicula = serviPelicula.obtenerPeliculaPorId(id);
		return ResponseEntity.ok(pelicula);
	}
}
