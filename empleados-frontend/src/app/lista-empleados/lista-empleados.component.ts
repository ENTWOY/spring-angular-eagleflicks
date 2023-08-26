import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  // actualizar empleados 2
  actualizarEmpleado(id:number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  // eliminar empleado 2
  eliminarEmpleado(id:number) {
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    });
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato => {
      console.log(dato);
      this.empleados = dato;
    });
  }

  detalleEmpleado(id:number) {
    this.router.navigate(['detalle-empleado', id]);
  }

}
