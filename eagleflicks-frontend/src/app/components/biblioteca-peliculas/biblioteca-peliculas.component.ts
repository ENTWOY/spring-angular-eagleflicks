import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../models/pelicula';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'app-biblioteca-peliculas',
  templateUrl: './biblioteca-peliculas.component.html',
  styleUrls: ['./biblioteca-peliculas.component.css']
})
export class BibliotecaPeliculasComponent implements OnInit {

  /* Ruta de almacenamiento de las img's pelicula en spring */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';
  objPelis:Pelicula[];
  /* objGenre:Genero[]; */
  title: string;
  anio: number;
  /* idGenero: number; */

  constructor(
    private serviInicio:InicioService, 
    private serviPelicula: PeliculaService,
    /* private serviGenre: GeneroService, */
    private router:Router
  ) { }

  ngOnInit(): void {
    this.obtenerListadoPeliculas();
    /* this.getGenre(); */
  }

  verPelicula(id:number) {
    this.router.navigate(['ver-pelicula', id]);
  }

  private obtenerListadoPeliculas() {
    this.serviInicio.obtenerListadoPeliculas().subscribe(dato => {
      this.objPelis = dato;
    });
  }

  /* getGenre() {
    this.serviGenre.obtenerListaGeneros().subscribe(genero => {
      this.objGenre = genero;
    });
  } */

  buscarPeliculaXTitulo() {
    this.serviInicio.buscarPeliculaXTitulo(this.title)
      .subscribe(
        pelis => this.objPelis = pelis,
        error => {
          console.error('Error fetching:', error);
          this.objPelis = [];
        }
      );
  }

  buscarPeliculaXAnio() {
    this.serviInicio.buscarPeliculaXAnio(this.anio)
      .subscribe(
        pelis => this.objPelis = pelis,
        error => {
          console.error('Error fetching:', error);
          this.objPelis = [];
        }
      );
  }

  /* findByPeliculaGeneroIdGenero() {
    this.serviPelicula.findByPeliculaGeneroIdGenero(this.idGenero).subscribe(
      (pelis) => {
        this.objPelis = pelis;
      },
      (error) => {
        console.error('Error fetching:', error);
        this.objPelis = [];
      }
    );
  } */
}
