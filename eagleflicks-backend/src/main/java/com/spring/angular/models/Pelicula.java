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
	
	@Column(name = "imagen")
	private String imagen;
	
	@ManyToOne
	@JoinColumn(name = "id_genero") 
	private Genero peliculaGenero; 
	
	@ManyToOne
	@JoinColumn(name = "id_director") 
	private Director peliculaDirector; 
	
	@ManyToOne
	@JoinColumn(name = "id_pais") 
	private Pais peliculaPais;

	public Pelicula() {
		super();
	}

	public Pelicula(Integer idPelicula, String titulo, String descripcion, int anio, int duracion, String productora,
			String idioma, String trailer, String imagen, Genero peliculaGenero, Director peliculaDirector,
			Pais peliculaPais) {
		super();
		this.idPelicula = idPelicula;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.anio = anio;
		this.duracion = duracion;
		this.productora = productora;
		this.idioma = idioma;
		this.trailer = trailer;
		this.imagen = imagen;
		this.peliculaGenero = peliculaGenero;
		this.peliculaDirector = peliculaDirector;
		this.peliculaPais = peliculaPais;
	}

	public Integer getIdPelicula() {
		return idPelicula;
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
}
