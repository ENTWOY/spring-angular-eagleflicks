package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.models.Actor;
import com.spring.angular.repositories.ActorRepository;

@Service
public class ActorService {

	@Autowired
	private ActorRepository repoActor;
	
	public List<Actor> listarActores() {
		return repoActor.findAll();
	}
}
