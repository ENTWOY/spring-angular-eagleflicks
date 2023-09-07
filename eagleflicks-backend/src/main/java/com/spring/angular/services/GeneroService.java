package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.models.Genero;
import com.spring.angular.repositories.GeneroRepository;

@Service
public class GeneroService implements GeneroServiceImp {

	@Autowired
	private GeneroRepository repoGenero;
	
	@Override
	public List<Genero> listarGeneros() {
		return repoGenero.findAll();
	}

}
