import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../../services/director.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

/* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-administradores',
  templateUrl: './lista-administradores.component.html',
  styleUrls: ['./lista-administradores.component.css']
})
export class ListaAdministradoresComponent implements OnInit {

  objAdmin:Administrador[];

  constructor(private serviAdmin:AdministradorService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerAdministradores();
  }

  private obtenerAdministradores() {
    this.serviAdmin.obtenerAdministradores().subscribe(dato => {
      console.log("Admins: ", dato);
      this.objAdmin = dato;
      this.showDatatable();
    });
  }

  actualizarAdministrador(id:number) {
    this.router.navigate(['actualizar-administrador', id]);
  }

  detalleAdministrador(id:number) {
    this.router.navigate(['detalle-administrador', id]);
  }

  eliminarAdministrador(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Esta acción eliminará al admin con ID: ${id}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Destruir la tabla DataTable si ya existe
        if ($.fn.DataTable.isDataTable('#datatable-spanish')) {
          $('#datatable-spanish').DataTable().destroy();
        }
        this.serviAdmin.eliminarAdministrador(id).subscribe(dato => {
          console.log(dato);
          this.obtenerAdministradores();
        });
        
        Swal.fire(
          '¡Eliminado!',
          `El admin con <strong>ID: ${id}</strong> ha sido eliminado.`,
          'success'
        );
      }
    });
  } 

  showDatatable(){
      $(document).ready(function() {
        $('#datatable-spanish').DataTable({
            "aLengthMenu": [10, 25, 50, 100],
            "language": {
              "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
          }
        });
    });  
  }
}
