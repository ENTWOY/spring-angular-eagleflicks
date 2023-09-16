import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { Pais } from '../../models/pais';
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
  paises: Pais[] = [];

  constructor(private empleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPaises();
    this.id = this.route.snapshot.params['id'];
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

  cargarPaises() {
    this.empleadoService.obtenerListaPaises().subscribe(paises => {
      console.log("paises", paises);
      this.paises = paises;
  
      // Luego de cargar los países, obtenemos los detalles del empleado
      this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(
        empleado => {
          this.empleado = empleado;
          
          // Una vez que tenemos el empleado, buscamos el país correspondiente y lo seleccionamos
          if (this.empleado && this.paises) {
            const paisSeleccionado = this.paises.find(pais => pais.idPais === this.empleado.empleadoPais.idPais);
            if (paisSeleccionado) {
              this.empleado.empleadoPais = paisSeleccionado;
            }
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  
}
