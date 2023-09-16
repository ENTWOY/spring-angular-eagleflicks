import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit  {

  id:number;
  objActor:Actor;

  constructor(private route:ActivatedRoute, private serviActor:ActorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objActor = new Actor();
    this.obtenerActorPorId();
  }

  obtenerActorPorId() {
    this.serviActor.obtenerActorPorId(this.id).subscribe(dato => {
      this.objActor = dato;
      Swal.fire(`Detalles Actor`);
    });
  }
}
