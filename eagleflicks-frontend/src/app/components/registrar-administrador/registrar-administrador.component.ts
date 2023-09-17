import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../../models/pais';
import Swal from 'sweetalert2';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-registrar-administrador',
  templateUrl: './registrar-administrador.component.html',
  styleUrls: ['./registrar-administrador.component.css']
})
export class RegistrarAdministradorComponent implements OnInit {

  objAdmin : Administrador = new Administrador();
  objPais: Pais[] = [];

  constructor(private serviAdmin:AdministradorService, private router:Router) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  onSubmit(){
    this.guardarAdministrador();
  }

  guardarAdministrador() {
    this.serviAdmin.registrarAdministrador(this.objAdmin).subscribe(
      dato => {
        console.log(dato);
        this.mostrarMensajeExito();
        this.irALaListaDeAdministradores();
      },
      error => {
        console.log(error);
      }
    );
  }

  irALaListaDeAdministradores() {
    this.router.navigate(['/administradores']);
  }

  cargarPaises() {
    this.serviAdmin.obtenerPaises().subscribe(dato => {
      console.log("Paises", dato);
      this.objPais = dato;
    });
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Registro exitoso!',
      `El admin <strong>${this.objAdmin.nombre}</strong> se ha registrado correctamente.`,
      'success'
    );
  }
}
