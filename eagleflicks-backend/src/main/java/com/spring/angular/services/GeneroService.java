package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.exceptions.ResourceNotFoundException;
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

	@Override
	public Genero guardarGenero(Genero genero) {
		return repoGenero.save(genero);
	}

	@Override
	public Genero obtenerGeneroPorId(Integer id) {
		return repoGenero.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el genero con el ID : " + id));
	}

	@Override
	public Genero actualizarGenero(Integer id, Genero detallesGenero) {
		Genero genero = repoGenero.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el genero con el ID: " + id));
		genero.setNomGen(detallesGenero.getNomGen());
		Genero generoActualizado = repoGenero.save(genero);
		return generoActualizado;
	}

	@Override
	public void eliminarGeneroPorId(Integer id) {
		Genero genero = repoGenero.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el genero con el ID : " + id));
		repoGenero.delete(genero);
	}
}
