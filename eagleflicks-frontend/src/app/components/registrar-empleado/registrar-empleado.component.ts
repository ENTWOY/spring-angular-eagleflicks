import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../empleado';
import { Pais } from '../../pais';
import { EmpleadoService } from '../../empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();
  paises: Pais[] = [];

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  onSubmit(){
    this.guardarEmpleado();
  }

  ngOnInit(): void {
    this.cargarPaises();
  }
  
  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(
      dato => {
        console.log(dato);
        this.mostrarMensajeExito();
        this.irALaListaDeEmpleados();
      },
      error => {
        console.log(error);
      }
    );
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Registro exitoso!',
      `El empleado <strong>${this.empleado.nomEmp}</strong> se ha registrado correctamente.`,
      'success'
    );
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
  }

  cargarPaises() {
    this.empleadoServicio.obtenerListaPaises().subscribe(dato => {
      // console.log(dato);
      this.paises = dato;
    });
  }
}
