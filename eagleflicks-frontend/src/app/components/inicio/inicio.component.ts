import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../pelicula';
import { PeliculaService } from '../../pelicula.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  /* Ruta de almacenamiento de las img's pelicula en spring */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';
  objPelis:Pelicula[];

  constructor(private serviPelicula:PeliculaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  private obtenerPeliculas() {
    this.serviPelicula.obtenerPeliculas().subscribe(dato => {
      console.log("Peliculas: ", dato);
      this.objPelis = dato;
    });
  }
}
