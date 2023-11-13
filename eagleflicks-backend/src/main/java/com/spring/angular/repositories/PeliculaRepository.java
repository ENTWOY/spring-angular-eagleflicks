package com.spring.angular.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.angular.models.Pelicula;

public interface PeliculaRepository extends JpaRepository<Pelicula, Integer>{

	// Para buscar x titulo en la vista biblioteca-peliculas
	List<Pelicula> findByTituloContainingIgnoreCase(String titulo);
	// Para buscar x anio en la vista biblioteca-peliculas
	List<Pelicula> findByAnio(int anio);
	// Buscar Pelicula x Categoria
	List<Pelicula> findByPeliculaGeneroIdGenero(int codCategoria);
	
	List<Pelicula> findAll();
	
	List<Pelicula> findById(int idPelicula);

	@Query("SELECT p FROM Pelicula p")
	List<Pelicula> obtenerRegistrosParaExportar();
}
