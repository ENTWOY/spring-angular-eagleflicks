package com.spring.angular.services;

import java.util.List;

import com.spring.angular.models.Director;

public interface DirectorServiceImp {
	
	List<Director> listarDirectores();
	Director guardarDirector(Director director);
	Director obtenerDirectorPorId(Integer id);
	Director actualizarDirector(Integer id, Director detallesDirector);
	public void eliminarDirectorPorId(Integer id);
}
