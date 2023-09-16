import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  /* ruta de almacenamiento de las img's pelicula en spring */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';

  id:number;
  objPeli:Pelicula;

  constructor(private route:ActivatedRoute, private serviPeli:PeliculaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mostrarDetalle();
  }

  mostrarDetalle(): void {
    this.objPeli = new Pelicula();
    this.serviPeli.obtenerPeliculaPorId(this.id).subscribe(dato => {
      this.objPeli = dato;
      Swal.fire(`Detalles de la película ${this.objPeli.titulo}`);
    });
  }
}
