package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.exceptions.ResourceNotFoundException;
import com.spring.angular.models.Actor;
import com.spring.angular.repositories.ActorRepository;

@Service
public class ActorService {

	@Autowired
	private ActorRepository repoActor;
	
	public List<Actor> listarActores() {
		return repoActor.findAll();
	}
	
	public Actor guardarActor(Actor actor) {
		return repoActor.save(actor);
	}

	public Actor obtenerActorPorId(Integer id) {
		return repoActor.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el actor con el ID : " + id));
	}

	public Actor actualizarActor(Integer id, Actor detallesActor) {
		Actor actor = repoActor.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el actor con el ID: " + id));
		actor.setNomActor(detallesActor.getNomActor());
		Actor actorActualizado = repoActor.save(actor);
		return actorActualizado;
	}

	public void eliminarActorPorId(Integer id) {
		Actor actor = repoActor.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el actor con el ID : " + id));
		repoActor.delete(actor);
	}
}
