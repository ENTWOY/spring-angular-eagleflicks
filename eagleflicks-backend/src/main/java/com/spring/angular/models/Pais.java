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
@Table(name = "tb_pais")
public class Pais {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_pais")
	private Integer idPais;
	
	@Column(name = "nom_pais")
	private String nomPais;
	
	@JsonIgnore
	@OneToMany(mappedBy = "directorPais")
	private List<Director> listaDirectores;
	
	@JsonIgnore
	@OneToMany(mappedBy = "peliculaPais")
	private List<Pelicula> listaPeliculas;
	
	@JsonIgnore
	@OneToMany(mappedBy = "administradorPais")
	private List<Administrador> listaAdministradores;

	public List<Pelicula> getListaPeliculas() {
		return listaPeliculas;
	}

	public void setListaPeliculas(List<Pelicula> listaPeliculas) {
		this.listaPeliculas = listaPeliculas;
	}

	public Integer getIdPais() {
		return idPais;
	}

	public void setIdPais(Integer idPais) {
		this.idPais = idPais;
	}

	public String getNomPais() {
		return nomPais;
	}

	public void setNomPais(String nomPais) {
		this.nomPais = nomPais;
	}

	public List<Director> getListaDirectores() {
		return listaDirectores;
	}

	public void setListaDirectores(List<Director> listaDirectores) {
		this.listaDirectores = listaDirectores;
	}
}
