import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-actor',
  templateUrl: './actualizar-actor.component.html',
  styleUrls: ['./actualizar-actor.component.css']
})
export class ActualizarActorComponent implements OnInit  {

  id:number;
  objActor:Actor = new Actor();

  constructor(private serviActor:ActorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerActorPorId();
  }

  onSubmit() {
    this.serviActor.actualizarActor(this.id, this.objActor).subscribe(
      dato => {
        this.mostrarMensajeExito();
        this.irAlaListaDeActores();
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerActorPorId() {
    this.serviActor.obtenerActorPorId(this.id).subscribe(dato => {
      this.objActor = dato;
    });
  }

  irAlaListaDeActores(){
    this.router.navigate(['/actores']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Actualización exitosa!',
      `Actor/es <strong>${this.objActor.nomActor}</strong> se actualizaron correctamente.`,
      'success'
    );
  }
}
