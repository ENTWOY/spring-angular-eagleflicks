import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { GeneroService } from 'src/app/services/genero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-genero',
  templateUrl: './actualizar-genero.component.html',
  styleUrls: ['./actualizar-genero.component.css']
})
export class ActualizarGeneroComponent implements OnInit {

  id:number;
  objGenero:Genero = new Genero();

  constructor(private serviGenero:GeneroService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerGeneroPorId();
  }

  onSubmit() {
    this.actualizarGenero();
  }

  actualizarGenero() {
    this.serviGenero.actualizarGenero(this.id, this.objGenero).subscribe(
      dato => {
        this.mostrarMensajeExito();
        this.irAlaListaDeGeneros();
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerGeneroPorId() {
    this.serviGenero.obtenerGeneroPorId(this.id).subscribe(dato => {
      this.objGenero = dato;
    });
  }

  irAlaListaDeGeneros(){
    this.router.navigate(['/generos']);
  }
  
  mostrarMensajeExito() {
    Swal.fire(
      '¡Actualización exitosa!',
      `El género <strong>${this.objGenero.nomGen}</strong> se ha actualizado correctamente.`,
      'success'
    );
  }
}
