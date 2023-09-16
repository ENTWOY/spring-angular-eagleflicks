package com.spring.angular.models;

import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "tb_director")
public class Director {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_director")
	private Integer idDirector;

	@Column(name = "nombre")
	private String nombre;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "fecha_nacimiento")
	private String fechaNacimiento;

	@ManyToOne
	@JoinColumn(name = "id_pais")
	private Pais directorPais;
	
	@JsonIgnore
	@OneToMany(mappedBy = "peliculaDirector")
	private List<Pelicula> listaPeliculas;

	public List<Pelicula> getListaPeliculas() {
		return listaPeliculas;
	}

	public void setListaPeliculas(List<Pelicula> listaPeliculas) {
		this.listaPeliculas = listaPeliculas;
	}

	public Integer getIdDirector() {
		return idDirector;
	}

	public void setIdDirector(Integer idDirector) {
		this.idDirector = idDirector;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public Pais getDirectorPais() {
		return directorPais;
	}

	public void setDirectorPais(Pais directorPais) {
		this.directorPais = directorPais;
	}
}
