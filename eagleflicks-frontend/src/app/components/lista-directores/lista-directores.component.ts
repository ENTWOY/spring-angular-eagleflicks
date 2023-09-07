import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../../director.service';
import { Router } from '@angular/router';
import { Director } from '../../director';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-directores',
  templateUrl: './lista-directores.component.html',
  styleUrls: ['./lista-directores.component.css']
})
export class ListaDirectoresComponent implements OnInit {

  objDirector:Director[];

  constructor(private directorServicio:DirectorService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerDirectores();
  }

  private obtenerDirectores() {
    this.directorServicio.obtenerListaDirectores().subscribe(dato => {
      console.log("Directores: ", dato);
      this.objDirector = dato;
    });
  }

  actualizarDirector(id:number) {
    this.router.navigate(['actualizar-director', id]);
  }

  detalleDirector(id:number) {
    this.router.navigate(['detalle-director', id]);
  }

  eliminarDirector(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Esta acción eliminará al director con ID: ${id}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.directorServicio.eliminarDirector(id).subscribe(dato => {
          console.log(dato);
          this.obtenerDirectores();
        });
        Swal.fire(
          '¡Eliminado!',
          `El director con <strong>ID: ${id}</strong> ha sido eliminado.`,
          'success'
        );
      }
    });
  } 
}
