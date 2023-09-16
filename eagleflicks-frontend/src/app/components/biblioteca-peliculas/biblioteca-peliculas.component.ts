import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  title: string;
  anio: number;

  constructor(private serviInicio:InicioService, private router:Router) { }


  ngOnInit(): void {
    this.obtenerListadoPeliculas();
  }

  verPelicula(id:number) {
    this.router.navigate(['ver-pelicula', id]);
  }

  private obtenerListadoPeliculas() {
    this.serviInicio.obtenerListadoPeliculas().subscribe(dato => {
      console.log("Peliculas: ", dato);
      this.objPelis = dato;
    });
  }

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
}
