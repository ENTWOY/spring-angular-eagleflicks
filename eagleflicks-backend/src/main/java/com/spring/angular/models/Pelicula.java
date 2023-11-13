package com.spring.angular.models;

import java.util.List;

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

@Entity
@Table(name = "tb_pelicula")
public class Pelicula {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_pelicula")
	private Integer idPelicula;

	@Column(name = "titulo")
	private String titulo;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@Column(name = "anio")
	private int anio;
	
	@Column(name = "duracion")
	private int duracion;
	
	@Column(name = "productora")
	private String productora;
	
	@Column(name = "idioma")
	private String idioma;
	
	@Column(name = "trailer")
	private String trailer;
	
	@Column(name = "video")
	private String video;
	
	@Column(name = "imagen")
	private String imagen;
	
	@Column(name = "servidor")
	private String servidor;

	@ManyToOne
	@JoinColumn(name = "id_genero") 
	private Genero peliculaGenero; 
	
	@ManyToOne
	@JoinColumn(name = "id_director") 
	private Director peliculaDirector; 
	
	@ManyToOne
	@JoinColumn(name = "id_pais") 
	private Pais peliculaPais;
	
	@ManyToOne
	@JoinColumn(name = "id_actor") 
	private Actor peliculaActor;
	
	@JsonIgnore
	@OneToMany(mappedBy = "comentarioPelicula")
	private List<Comentario> listaComentario;

	public List<Comentario> getListaComentario() {
		return listaComentario;
	}

	public void setListaComentario(List<Comentario> listaComentario) {
		this.listaComentario = listaComentario;
	}

	public Integer getIdPelicula() {
		return idPelicula;
	}
	
	public String getServidor() {
		return servidor;
	}

	public void setServidor(String servidor) {
		this.servidor = servidor;
	}

	public void setIdPelicula(Integer idPelicula) {
		this.idPelicula = idPelicula;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getAnio() {
		return anio;
	}

	public void setAnio(int anio) {
		this.anio = anio;
	}

	public int getDuracion() {
		return duracion;
	}

	public void setDuracion(int duracion) {
		this.duracion = duracion;
	}

	public String getProductora() {
		return productora;
	}

	public void setProductora(String productora) {
		this.productora = productora;
	}

	public String getIdioma() {
		return idioma;
	}

	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}

	public String getTrailer() {
		return trailer;
	}

	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public Genero getPeliculaGenero() {
		return peliculaGenero;
	}

	public void setPeliculaGenero(Genero peliculaGenero) {
		this.peliculaGenero = peliculaGenero;
	}

	public Director getPeliculaDirector() {
		return peliculaDirector;
	}

	public void setPeliculaDirector(Director peliculaDirector) {
		this.peliculaDirector = peliculaDirector;
	}

	public Pais getPeliculaPais() {
		return peliculaPais;
	}

	public void setPeliculaPais(Pais peliculaPais) {
		this.peliculaPais = peliculaPais;
	}

	public Actor getPeliculaActor() {
		return peliculaActor;
	}

	public void setPeliculaActor(Actor peliculaActor) {
		this.peliculaActor = peliculaActor;
	}
}
