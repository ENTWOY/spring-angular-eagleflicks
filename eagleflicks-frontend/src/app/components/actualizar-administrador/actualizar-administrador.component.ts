import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../../services/director.service';
import { Pais } from '../../models/pais';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-actualizar-administrador',
  templateUrl: './actualizar-administrador.component.html',
  styleUrls: ['./actualizar-administrador.component.css']
})
export class ActualizarAdministradorComponent {

  id:number;
  objAdmin:Administrador = new Administrador();
  objPais: Pais[] = [];

  constructor(private serviAdmin:AdministradorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPaises();
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.actualizarAdministrador();
  }

  actualizarAdministrador() {
    this.serviAdmin.actualizarAdministrador(this.id, this.objAdmin).subscribe(
      dato => {
        this.mostrarMensajeExito();
        this.irAlaListaDeAdministradores();
      },
      error => {
        console.log(error);
      }
    );
  }

  cargarPaises() {
    this.serviAdmin.obtenerPaises().subscribe(paises => {
      console.log("Paises", paises);
      this.objPais = paises;
  
      // Luego de cargar los países, obtenemos los detalles
      this.serviAdmin.obtenerAdministradorPorId(this.id).subscribe(
        admin => {
          this.objAdmin = admin;
          
          // Una vez que tenemos el admin, buscamos el país correspondiente y lo seleccionamos
          if (this.objAdmin && this.objPais) {
            const paisSeleccionado = this.objPais.find(pais => pais.idPais === this.objAdmin.administradorPais.idPais);
            if (paisSeleccionado) {
              this.objAdmin.administradorPais = paisSeleccionado;
            }
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  irAlaListaDeAdministradores(){
    this.router.navigate(['/administradores']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Actualización exitosa!',
      `El admin <strong>${this.objAdmin.nombre}</strong> se ha actualizado correctamente.`,
      'success'
    );
  }
}
