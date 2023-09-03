import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];
  nomEmp: string;

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  // actualizar empleados 
  actualizarEmpleado(id:number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  // eliminar empleado 
  eliminarEmpleado(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Esta acción eliminará al empleado ID: ${id}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
        });
        Swal.fire(
          '¡Eliminado!',
          `El empleado con <strong>id: ${id}</strong> ha sido eliminado.`,
          'success'
        );
      }
    });
  }  

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato => {
      // console.log(dato);
      this.empleados = dato;
    });
  }

  detalleEmpleado(id:number) {
    this.router.navigate(['detalle-empleado', id]);
  }

  buscarEmpleadoXNombre() {
    this.empleadoServicio.buscarEmpleadoPorNombre(this.nomEmp)
      .subscribe(
        employees => this.empleados = employees,
        error => {
          console.error('Error fetching users:', error);
          this.empleados = [];
        }
      );
  }
}
