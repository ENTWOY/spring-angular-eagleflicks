import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../../director.service';
import { Pais } from '../../pais';
import { ActivatedRoute, Router } from '@angular/router';
import { Director } from '../../director';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-director',
  templateUrl: './actualizar-director.component.html',
  styleUrls: ['./actualizar-director.component.css']
})
export class ActualizarDirectorComponent implements OnInit  {

  id:number;
  objDirector:Director = new Director();
  objPais: Pais[] = [];

  constructor(private directorService:DirectorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPaises();
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.directorService.actualizarDirector(this.id, this.objDirector).subscribe(
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
    this.directorService.obtenerListaPaises().subscribe(paises => {
      console.log("Paises", paises);
      this.objPais = paises;
  
      // Luego de cargar los países, obtenemos los detalles
      this.directorService.obtenerDirectorPorId(this.id).subscribe(
        director => {
          this.objDirector = director;
          
          // Una vez que tenemos el directo, buscamos el país correspondiente y lo seleccionamos
          if (this.objDirector && this.objPais) {
            const paisSeleccionado = this.objPais.find(pais => pais.idPais === this.objDirector.directorPais.idPais);
            if (paisSeleccionado) {
              this.objDirector.directorPais = paisSeleccionado;
            }
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/directores']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Actualización exitosa!',
      `El director <strong>${this.objDirector.nombre}</strong> se ha actualizado correctamente.`,
      'success'
    );
  }
}
