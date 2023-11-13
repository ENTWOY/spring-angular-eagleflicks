import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../../services/director.service';
import { Router } from '@angular/router';
import { Director } from '../../models/director';
import Swal from 'sweetalert2';

/* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-directores',
  templateUrl: './lista-directores.component.html',
  styleUrls: ['./lista-directores.component.css']
})
export class ListaDirectoresComponent implements OnInit {

  objDirector:Director[];

  constructor(
    private serviDirector:DirectorService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    this.obtenerDirectores();
  }

  private obtenerDirectores() {
    this.serviDirector.obtenerListaDirectores().subscribe(dato => {
      console.log("Directores: ", dato);
      this.objDirector = dato;
      this.showDatatable();
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
        // Destruir la tabla DataTable si ya existe
        if ($.fn.DataTable.isDataTable('#datatable-spanish')) {
          $('#datatable-spanish').DataTable().destroy();
        }
        this.serviDirector.eliminarDirector(id).subscribe(dato => {
          console.log(dato);
          this.obtenerDirectores();
        });
        
        Swal.fire(
          '¡Eliminado!',
          `El género con <strong>ID: ${id}</strong> ha sido eliminada.`,
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
