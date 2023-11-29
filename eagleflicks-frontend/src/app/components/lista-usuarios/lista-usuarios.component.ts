import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

/* Variable JQuery(Datatables */
  declare var $: any;

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  objUsuario:Usuario[];

  constructor(private serviUsuario:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerListaUsuarios();
  }

  private obtenerListaUsuarios() {
    this.serviUsuario.obtenerListaUsuarios().subscribe(dato => {
      console.log("Usuarios: ", dato);
      this.objUsuario = dato;
      this.showDatatable();
    });
  }

  actualizarUsuario(id:number) {
    this.router.navigate(['actualizar-usuario', id]);
  }

  detalleUsuario(id:number) {
    this.router.navigate(['detalle-usuario', id]);
  }

  eliminarUsuario(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Esta acción eliminará al usuario con ID: ${id}`,
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
        this.serviUsuario.eliminarUsuario(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaUsuarios();
        });
        
        Swal.fire(
          '¡Eliminado!',
          `El usuario con <strong>ID: ${id}</strong> ha sido eliminado.`,
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
