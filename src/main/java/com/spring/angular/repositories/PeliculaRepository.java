package com.spring.angular.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.spring.angular.models.Pelicula;

@Repository
public interface PeliculaRepository extends JpaRepository<Pelicula, Integer>{
	
	public List<Pelicula> findAll();
	
	public List<Pelicula> findById(int idPelicula);

	@Query("SELECT p FROM Pelicula p")
	public List<Pelicula> obtenerRegistrosParaExportar();
}
