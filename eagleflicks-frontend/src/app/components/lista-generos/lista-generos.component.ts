import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from '../../models/genero';
import Swal from 'sweetalert2';
import { GeneroService } from 'src/app/services/genero.service';

/* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.css']
})
export class ListaGenerosComponent implements OnInit {

  objGenero:Genero[];

  constructor(private serviGenero:GeneroService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerGeneros();
  }

  private obtenerGeneros() {
    this.serviGenero.obtenerListaGeneros().subscribe(dato => {
      console.log("Generos: ", dato);
      this.objGenero = dato;
      this.showDatatable();
    });
  }

  actualizarGenero(id:number) {
    this.router.navigate(['actualizar-genero', id]);
  }

  detalleGenero(id:number) {
    this.router.navigate(['detalle-genero', id]);
  }

  eliminarGenero(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Esta acción eliminará al género con ID: ${id}`,
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
        this.serviGenero.eliminarGenero(id).subscribe(dato => {
          console.log(dato);
          this.obtenerGeneros();
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
