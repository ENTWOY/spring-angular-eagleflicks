import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import Swal from 'sweetalert2';

/* Variable JQuery(Datatables */
declare var $: any;

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  /* Ruta de almacenamiento de las img's pelicula en spring */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';
  peliculas:Pelicula[];

  constructor(private serviPelicula:PeliculaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  private obtenerPeliculas() {
    this.serviPelicula.obtenerPeliculas().subscribe(dato => {
      console.log("Peliculas: ", dato);
      this.peliculas = dato;
      this.showDatatable();
    });
  }

  actualizarPelicula(id:number) {
    this.router.navigate(['actualizar-pelicula', id]);
  }

  detallePelicula(id:number) {
    this.router.navigate(['detalle-pelicula', id]);
  }

  eliminarPelicula(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Esta acción eliminará la película con ID: ${id}`,
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
        this.serviPelicula.eliminarPelicula(id).subscribe(dato => {
          console.log(dato);
          this.obtenerPeliculas();
        });
        
        Swal.fire(
          '¡Eliminado!',
          `La película con <strong>ID: ${id}</strong> ha sido eliminada.`,
          'success'
        );
      }
    });
  }
  
  public generarPdf() {
    // Llamar a la función obtenerReportePDF sin argumentos
    this.serviPelicula.obtenerReportePDF().subscribe(
      blob => {
        // Generar el PDF
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'reporte_peliculas.pdf';
        link.click();
      },
      error => {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error'
        });
      }
    );
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
