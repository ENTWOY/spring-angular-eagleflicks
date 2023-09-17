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

import com.spring.angular.models.Actor;
import com.spring.angular.services.ActorService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class ActorController {
	
	@Autowired
	private ActorService serviActor;

	@GetMapping("/actores")
	public List<Actor> listarActores() {
		return serviActor.listarActores();
	}
	
	@PostMapping("/actores")
	public Actor guardarActor(@RequestBody Actor actor) {
		return serviActor.guardarActor(actor);
	}
	
	@GetMapping("/actores/{id}")
	public ResponseEntity<Actor> obtenerActorPorId(@PathVariable Integer id) {
		Actor actor = serviActor.obtenerActorPorId(id);
		return ResponseEntity.ok(actor);
	}
	
	@PutMapping("/actores/{id}")
	public ResponseEntity<Actor> actualizarActor(@PathVariable Integer id,
			@RequestBody Actor detallesActor) {
		Actor actorActualizado = serviActor.actualizarActor(id, detallesActor);
		return ResponseEntity.ok(actorActualizado);
	}
	
	@DeleteMapping("/actores/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarActor(@PathVariable Integer id) {
		serviActor.eliminarActorPorId(id);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
}
