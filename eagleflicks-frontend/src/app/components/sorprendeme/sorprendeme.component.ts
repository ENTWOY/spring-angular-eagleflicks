import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../models/pelicula';
import { InicioService } from '../../services/inicio.service';

@Component({
  selector: 'app-sorprendeme',
  templateUrl: './sorprendeme.component.html',
  styleUrls: ['./sorprendeme.component.css']
})
export class SorprendemeComponent {

  /* Ruta de almacenamiento de las img's pelicula en spring */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';
  objPeli:Pelicula[];

  constructor(private serviInicio:InicioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerPeliculasAleatorias();
  }

  private obtenerPeliculasAleatorias() {
    this.serviInicio.obtenerPeliculasAleatorias().subscribe(dato => {
      console.log("Peliculas: ", dato);
      this.objPeli = dato;
    });
  }

  verPelicula(id:number) {
    this.router.navigate(['ver-pelicula', id]);
  }
}
