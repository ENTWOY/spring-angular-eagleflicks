import { Component, OnInit } from '@angular/core';
import { Director } from 'src/app/models/director';
import { Genero } from 'src/app/models/genero';
import { Pais } from 'src/app/models/pais';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-actualizar-pelicula',
  templateUrl: './actualizar-pelicula.component.html',
  styleUrls: ['./actualizar-pelicula.component.css']
})
export class ActualizarPeliculaComponent implements OnInit {

  /* ruta de almacenamiento de las img's pelicula en spring(BackEnd) */
  myFileImgs: string = 'http://localhost:8091/api/movie/uploads/';

  id:number;
  objPeli:Pelicula = new Pelicula();
  objPais: Pais[] = [];
  objGenero: Genero[] = [];
  objActor: Actor[] = [];
  objDirector: Director[] = [];
  file: File | null = null

  constructor(private serviPeli:PeliculaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarYObtenerDetalles();
    this.id = this.route.snapshot.params['id'];
    this.objPeli = new Pelicula();
    this.serviPeli.obtenerPeliculaPorId(this.id).subscribe(dato => {
      this.objPeli = dato;
    });
  }

  handleFileChange(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 1024 * 1024) {
        Swal.fire(`El archivo no puede superar 1 MB de tamaño!`);
        event.target.value = null;
      } else {
        this.file = selectedFile;
      }
    }
  }

  handleSubmit() {
    this.actualizarPelicula();
  }

  actualizarPelicula(){
    if (!this.file) {
      return;
    }

    this.serviPeli.registrarPelicula(this.objPeli, this.file).then(
      (dato) => {
        console.log(dato);
        this.mostrarMensajeExito();
        this.irAlaListaDePeliculas();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cargarYObtenerDetalles() {
    // Primero, cargamos los países
    this.serviPeli.obtenerPaises().subscribe(paises => {
      console.log("Paises", paises);
      this.objPais = paises;
  
      // cargamos los géneros
      this.serviPeli.obtenerGeneros().subscribe(generos => {
        console.log("Generos", generos);
        this.objGenero = generos;
  
        // cargamos los directores
        this.serviPeli.obtenerDirectores().subscribe(directores => {
          console.log("Directores", directores);
          this.objDirector = directores;

          // y finalmente, cargamos los actores
          this.serviPeli.obtenerActores().subscribe(actores => {
            console.log("Actores", actores);
            this.objActor = actores;
  
            // Una vez que hemos cargado todas las listas, obtenemos los detalles de la película
            this.serviPeli.obtenerPeliculaPorId(this.id).subscribe(
              peli => {
                this.objPeli = peli;
    
                // Buscamos el país correspondiente y lo seleccionamos
                if (this.objPeli && this.objPais) {
                  const paisSeleccionado = this.objPais.find(pais => pais.idPais === this.objPeli.peliculaPais.idPais);
                  if (paisSeleccionado) {
                    this.objPeli.peliculaPais = paisSeleccionado;
                  }
                }
    
                // Buscamos el género correspondiente y lo seleccionamos
                if (this.objPeli && this.objGenero) {
                  const generoSeleccionado = this.objGenero.find(genero => genero.idGenero === this.objPeli.peliculaGenero.idGenero);
                  if (generoSeleccionado) {
                    this.objPeli.peliculaGenero = generoSeleccionado;
                  }
                }
    
                // Buscamos el director correspondiente y lo seleccionamos
                if (this.objPeli && this.objDirector) {
                  const directorSeleccionado = this.objDirector.find(director => director.idDirector === this.objPeli.peliculaDirector.idDirector);
                  if (directorSeleccionado) {
                    this.objPeli.peliculaDirector = directorSeleccionado;
                  }
                }

                // Buscamos actor/es correspondiente y lo seleccionamos
                if (this.objPeli && this.objActor) {
                  const actorSeleccionado = this.objActor.find(actor => actor.idActor === this.objPeli.peliculaActor.idActor);
                  if (actorSeleccionado) {
                    this.objPeli.peliculaActor = actorSeleccionado;
                  }
                }
              },
              error => {
                console.log(error);
              }
            );
          });
        });
      });
    });
  }

  irAlaListaDePeliculas(){
    this.router.navigate(['/peliculas']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Actualización exitosa!',
      `La película <strong>${this.objPeli.titulo}</strong> se ha actualizado correctamente.`,
      'success'
    );
  }
}
