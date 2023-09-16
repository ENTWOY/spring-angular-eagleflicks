import { Component, OnInit } from '@angular/core';
import { Genero } from '../../models/genero';
import { ActivatedRoute } from '@angular/router';
import { GeneroService } from '../../services/genero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-genero',
  templateUrl: './detalle-genero.component.html',
  styleUrls: ['./detalle-genero.component.css']
})
export class DetalleGeneroComponent implements OnInit {
  
  id:number;
  objGenero:Genero;

  constructor(private route:ActivatedRoute, private serviGenero:GeneroService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objGenero = new Genero();
    this.obtenerGeneroPorId();
  }

  obtenerGeneroPorId() {
    this.serviGenero.obtenerGeneroPorId(this.id).subscribe(dato => {
      this.objGenero = dato;
      Swal.fire(`Detalles género`);
    });
  }
}
