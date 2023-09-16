import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../models/pelicula';
import { InicioService } from '../../services/inicio.service';
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
  videoPeliUrl: SafeResourceUrl;
  errorUrlTrailer: string = '';
  errorUrlVideo: string = '';

  constructor(private route:ActivatedRoute, private serviHome:InicioService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objPeli = new Pelicula();
  
    this.serviHome.obtenerPeliculaPorId(this.id).subscribe(dato => {
      this.objPeli = dato;

      this.handleTrailerUrl();
      this.handleVideoUrl();
    });
  }

  private handleTrailerUrl(): void {
    if (this.objPeli.trailer) {
      if (this.isValidUrl(this.objPeli.trailer)) {
        this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.objPeli.trailer);
      } else {
        this.errorUrlTrailer = 'URL del trailer(YouTube) no válida';
      }
    }
  }
  
  private handleVideoUrl(): void {
    if (this.objPeli.video) {
      if (this.isValidUrl(this.objPeli.video)) {
        this.videoPeliUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.objPeli.video);
      } else {
        this.errorUrlVideo = 'URL del video(Película) no válida';
      }
    }
  }
  

  isValidUrl(url: string): boolean {
    // Verificar si la URL comienza con http:// o https://
    const urlPattern = /^(http:\/\/|https:\/\/)/;
    return urlPattern.test(url);
  }
}
