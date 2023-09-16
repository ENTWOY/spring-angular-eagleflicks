package com.spring.angular.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_comentario")
public class Comentario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_comentario")
	private Integer idComentario;

	@Column(name = "comentario")
	private String comentario;
	
	@ManyToOne
	@JoinColumn(name = "id_usu") 
	private Usuario comentarioUsuario; 
	
	@ManyToOne
	@JoinColumn(name = "id_pelicula") 
	private Pelicula comentarioPelicula;

	public Integer getIdComentario() {
		return idComentario;
	}

	public void setIdComentario(Integer idComentario) {
		this.idComentario = idComentario;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public Usuario getComentarioUsuario() {
		return comentarioUsuario;
	}

	public void setComentarioUsuario(Usuario comentarioUsuario) {
		this.comentarioUsuario = comentarioUsuario;
	}

	public Pelicula getComentarioPelicula() {
		return comentarioPelicula;
	}

	public void setComentarioPelicula(Pelicula comentarioPelicula) {
		this.comentarioPelicula = comentarioPelicula;
	} 
}
