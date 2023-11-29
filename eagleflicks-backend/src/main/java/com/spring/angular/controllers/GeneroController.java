package com.spring.angular.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.models.Genero;
import com.spring.angular.services.GeneroService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class GeneroController {

	@Autowired
	private GeneroService serviGenero;
	
	@GetMapping("/generos")
	public List<Genero> listarGeneros() {
		return serviGenero.listarGeneros();
	}
	
	@PostMapping("/generos")
	public Genero guardarGenero(@RequestBody Genero genero) {
		return serviGenero.guardarGenero(genero);
	}
	
	@GetMapping("/generos/{id}")
	public ResponseEntity<Genero> obtenerGeneroPorId(@PathVariable Integer id) {
		Genero genero = serviGenero.obtenerGeneroPorId(id);
		return ResponseEntity.ok(genero);
	}
	
	@PutMapping("/generos/{id}")
	public ResponseEntity<Genero> actualizarGenero(@PathVariable Integer id,
			@RequestBody Genero detallesGenero) {
		Genero generoActualizado = serviGenero.actualizarGenero(id, detallesGenero);
		return ResponseEntity.ok(generoActualizado);
	}
	
	@DeleteMapping("/generos/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarGenero(@PathVariable Integer id) {
		serviGenero.eliminarGeneroPorId(id);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
}
