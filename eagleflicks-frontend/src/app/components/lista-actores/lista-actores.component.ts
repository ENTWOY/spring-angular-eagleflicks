import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';
import Swal from 'sweetalert2';

/* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-actores',
  templateUrl: './lista-actores.component.html',
  styleUrls: ['./lista-actores.component.css']
})
export class ListaActoresComponent implements OnInit {

  objActor:Actor[];

  constructor(private serviActor:ActorService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerActores();
  }

  private obtenerActores() {
    this.serviActor.obtenerListaActores().subscribe(dato => {
      console.log("Actores: ", dato);
      this.objActor = dato;
      this.showDatatable();
    });
  }

  actualizarActor(id:number) {
    this.router.navigate(['actualizar-actor', id]);
  }

  detalleActor(id:number) {
    this.router.navigate(['detalle-actor', id]);
  }

  eliminarActor(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Esta acción eliminará al actor con ID: ${id}`,
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
        this.serviActor.eliminarActor(id).subscribe(dato => {
          console.log(dato);
          this.obtenerActores();
        });
        
        Swal.fire(
          '¡Eliminado!',
          `El actor con <strong>ID: ${id}</strong> ha sido eliminada.`,
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
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla =(",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                },
                "buttons": {
                    "copy": "Copiar",
                    "colvis": "Visibilidad"
                }
            }
        });
    });  
  }
}
