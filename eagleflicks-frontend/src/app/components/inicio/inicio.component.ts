import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../models/pelicula';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  /* Ruta de almacenamiento de las img's pelicula en spring */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';
  /* myFileNoImg: string = 'http://localhost:8091/api/movie/uploads/noImg.jpg'; */
  objPelis:Pelicula[];

  paginaActual: number = 1;
  itemsXPagina: number = 7;

  constructor(private serviInicio:InicioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  verPelicula(id:number) {
    this.router.navigate(['ver-pelicula', id]);
  }

  private obtenerPeliculas() {
    this.serviInicio.obtenerPeliculas().subscribe(dato => {
      console.log("Peliculas: ", dato);
      this.objPelis = dato;
    });
  }

  previousPage() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.objPelis.length / this.itemsXPagina);
    if (this.paginaActual < totalPages) {
      this.paginaActual++;
    }
  }

}
