import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-administrador',
  templateUrl: './detalle-administrador.component.html',
  styleUrls: ['./detalle-administrador.component.css']
})
export class DetalleAdministradorComponent implements OnInit  {

  id:number;
  objAdmin:Administrador;

  constructor(private route:ActivatedRoute, private serviAdmin:AdministradorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objAdmin = new Administrador();
    this.detalleAdministrador();
  }

  detalleAdministrador() {
    this.serviAdmin.obtenerAdministradorPorId(this.id).subscribe(dato => {
      this.objAdmin = dato;
      Swal.fire(`Detalles del admin ${this.objAdmin.nombre}`);
    });
  }
}
