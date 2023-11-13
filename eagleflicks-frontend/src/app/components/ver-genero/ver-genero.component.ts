import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { Pelicula } from 'src/app/models/pelicula';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-ver-genero',
  templateUrl: './ver-genero.component.html',
  styleUrls: ['./ver-genero.component.css']
})
export class VerGeneroComponent implements OnInit {

  /* Ruta de almacenamiento de las img's pelicula en spring */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';
  idGenero: number;
  objPelicula: Pelicula[];
  objGenero: Genero = new Genero();

  constructor(
    private route: ActivatedRoute,
    private serviPelicula: PeliculaService,
    private serviGenero: GeneroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idGenero = this.route.snapshot.params['id'];
    this.getGenderById(this.idGenero);
    this.getBusquedaCodCategoria();
  }

  getBusquedaCodCategoria() {
    this.serviPelicula.findByPeliculaGeneroIdGenero(this.idGenero).subscribe(
      (pelis) => {
        this.objPelicula = pelis;
      },
      (error) => {
        console.error('Error fetching:', error);
        this.objPelicula = [];
      }
    );
  }

  getGenderById(id: number): void {
    this.serviGenero.obtenerGeneroPorId(id).subscribe(d => {
      this.objGenero = d;
    });
  }

  verPelicula(id:number) {
    this.router.navigate(['ver-pelicula', id]);
  }
}
