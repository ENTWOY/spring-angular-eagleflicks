import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { GeneroService } from 'src/app/services/genero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-genero',
  templateUrl: './registrar-genero.component.html',
  styleUrls: ['./registrar-genero.component.css']
})
export class RegistrarGeneroComponent implements OnInit {

  objGenero:Genero = new Genero();

  constructor(private serviGenero:GeneroService, private router:Router) {
    //this.objGenero.idGenero = 0;
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.guardarGenero();
  }

  guardarGenero() {
    this.serviGenero.registrarGenero(this.objGenero).subscribe(
      dato => {
        console.log(dato);
        this.mostrarMensajeExito();
        this.irALaListaDeGeneros();
      },
      error => {
        console.log(error);
      }
    );
  }

  irALaListaDeGeneros() {
    this.router.navigate(['/generos']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Registro exitoso!',
      `El género <strong>${this.objGenero.nomGen}</strong> se ha registrado correctamente.`,
      'success'
    );
  }
}
