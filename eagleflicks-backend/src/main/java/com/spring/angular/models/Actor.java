package com.spring.angular.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_actor")
public class Actor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_actor")
	private Integer idActor;
	
	@Column(name = "nom_actor")
	private String nomActor;
	
	@JsonIgnore
	@OneToMany(mappedBy = "peliculaActor")
	private List<Pelicula> listaPeliculas;

	public Integer getIdActor() {
		return idActor;
	}

	public void setIdActor(Integer idActor) {
		this.idActor = idActor;
	}

	public String getNomActor() {
		return nomActor;
	}

	public void setNomActor(String nomActor) {
		this.nomActor = nomActor;
	}

	public List<Pelicula> getListaPeliculas() {
		return listaPeliculas;
	}

	public void setListaPeliculas(List<Pelicula> listaPeliculas) {
		this.listaPeliculas = listaPeliculas;
	}
}
