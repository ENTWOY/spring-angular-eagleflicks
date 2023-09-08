import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../pelicula';
import { InicioService } from '../../inicio.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styleUrls: ['./ver-pelicula.component.css']
})
export class VerPeliculaComponent {

  /* ruta de almacenamiento de las img's pelicula en spring */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';

  id:number;
  objPeli:Pelicula;
  trailerUrl: SafeResourceUrl;

  constructor(private route:ActivatedRoute, private serviHome:InicioService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objPeli = new Pelicula();
    this.serviHome.obtenerPeliculaPorId(this.id).subscribe(dato => {
      this.objPeli = dato;

      if (this.objPeli.trailer) {
        this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.objPeli.trailer);
      }
    });
  }
}
