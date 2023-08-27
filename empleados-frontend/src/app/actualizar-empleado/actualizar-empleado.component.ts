import { EmpleadoService } from './../empleado.service';
import { Empleado } from './../empleado';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id:number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(
      dato => {
        this.empleado = dato;
      },
      error => {
        console.log(error);
      }
    );
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Actualización exitosa!',
      `El empleado <strong>${this.empleado.nomEmp}</strong> se ha actualizado correctamente.`,
      'success'
    );
  }

  onSubmit() {
    this.empleadoService.actualizarEmpleado(this.id, this.empleado).subscribe(
      dato => {
        this.mostrarMensajeExito();
        this.irAlaListaDeEmpleados();
      },
      error => {
        console.log(error);
      }
    );
  }
}
