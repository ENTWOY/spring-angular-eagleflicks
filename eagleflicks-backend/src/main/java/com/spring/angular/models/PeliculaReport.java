package com.spring.angular.models;

import java.util.List;

public class PeliculaReport {

	public List<Pelicula> peliculasList;

	public PeliculaReport() {
		super();
	}

	public List<Pelicula> getPeliculasList() {
		return peliculasList;
	}

	public PeliculaReport(List<Pelicula> peliculasList) {
		super();
		this.peliculasList = peliculasList;
	}

	public void setRegistrosList(List<Pelicula> peliculasList) {
		this.peliculasList = peliculasList;
	}
	
}