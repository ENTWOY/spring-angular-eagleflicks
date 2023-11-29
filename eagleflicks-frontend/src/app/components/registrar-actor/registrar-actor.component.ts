import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-actor',
  templateUrl: './registrar-actor.component.html',
  styleUrls: ['./registrar-actor.component.css']
})
export class RegistrarActorComponent implements OnInit {

  objActor:Actor = new Actor();

  constructor(private serviActor:ActorService, private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.guardarActor();
  }

  guardarActor() {
    this.serviActor.registrarActor(this.objActor).subscribe(
      dato => {
        console.log(dato);
        this.mostrarMensajeExito();
        this.irALaListaDeActores();
      },
      error => {
        console.log(error);
      }
    );
  }

  irALaListaDeActores() {
    this.router.navigate(['/actores']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Registro exitoso!',
      `Actor/es <strong>${this.objActor.nomActor}</strong> se han registrado correctamente.`,
      'success'
    );
  }
}
