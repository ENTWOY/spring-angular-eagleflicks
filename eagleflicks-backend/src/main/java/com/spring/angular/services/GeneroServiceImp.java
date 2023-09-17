package com.spring.angular.services;

import java.util.List;

import com.spring.angular.models.Genero;

public interface GeneroServiceImp {

	List<Genero> listarGeneros();
	Genero guardarGenero(Genero genero);
	Genero obtenerGeneroPorId(Integer id);
	Genero actualizarGenero(Integer id, Genero detallesGenero);
	public void eliminarGeneroPorId(Integer id);
}
