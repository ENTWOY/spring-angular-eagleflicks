package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.exceptions.ResourceNotFoundException;
import com.spring.angular.models.Director;
import com.spring.angular.repositories.DirectorRepository;

@Service
public class DirectorService implements DirectorServiceImp {

	@Autowired
	private DirectorRepository repoDirector;
	
	@Override
	public List<Director> listarDirectores() {
		return repoDirector.findAll();
	}

	@Override
	public Director guardarDirector(Director director) {
		return repoDirector.save(director);
	}

	@Override
	public Director obtenerDirectorPorId(Integer id) {
		return repoDirector.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el director con el ID : " + id));
	}

	@Override
	public Director actualizarDirector(Integer id, Director detallesDirector) {
		Director director = repoDirector.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el director con el ID: " + id));
		director.setNombre(detallesDirector.getNombre());
		director.setFechaNacimiento(detallesDirector.getFechaNacimiento());
		director.setDirectorPais(detallesDirector.getDirectorPais());
		Director directorActualizado = repoDirector.save(director);
		return directorActualizado;
	}

	@Override
	public void eliminarDirectorPorId(Integer id) {
		Director director = repoDirector.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el director con el ID : " + id));
		repoDirector.delete(director);
	}

}
