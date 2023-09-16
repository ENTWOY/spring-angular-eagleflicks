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
@Table(name = "tb_usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usu")
	private Integer idUsu;

	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "contrasena")
	private String contrasena;
	
	@Column(name = "avatar")
	private String avatar;
	
	@JsonIgnore
	@OneToMany(mappedBy = "comentarioUsuario")
	private List<Comentario> listaComentario;

	public Integer getIdUsu() {
		return idUsu;
	}

	public void setIdUsu(Integer idUsu) {
		this.idUsu = idUsu;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public List<Comentario> getListaComentario() {
		return listaComentario;
	}

	public void setListaComentario(List<Comentario> listaComentario) {
		this.listaComentario = listaComentario;
	}
}
