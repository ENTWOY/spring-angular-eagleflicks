import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../pelicula';
import { PeliculaService } from '../../pelicula.service';
import Swal from 'sweetalert2';
import { Genero } from 'src/app/genero';
import { Director } from 'src/app/director';
import { Pais } from '../../pais';

@Component({
  selector: 'app-registrar-pelicula',
  templateUrl: './registrar-pelicula.component.html',
  styleUrls: ['./registrar-pelicula.component.css']
})
export class RegistrarPeliculaComponent implements OnInit {

  objPelicula: Pelicula = new Pelicula();
  objPaises: Pais[] = [];
  objGenero: Genero[] = [];
  objDirector: Director[] = [];
  file: File | null = null

  constructor(private serviPeli:PeliculaService, private router:Router) {
    this.objPelicula.idPelicula = 0;
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
    this.guardarPelicula();
  }

  ngOnInit(): void {
    this.cargarPaises();
    this.cargarDirectores();
    this.cargarGeneros();
  }

  guardarPelicula(){
    if (/* !this.objPelicula.title || !this.objPelicula.description || */ !this.file) {
      return;
    }

    // const formData = new FormData();
    // formData.append('title', this.objPelicula.title);
    // formData.append('description', this.objPelicula.description);
    // formData.append('file', this.file);

    this.serviPeli.registrarPelicula(this.objPelicula, this.file).then(
      (dato) => {
        console.log(dato);
        this.mostrarMensajeExito();
        this.irALaListaDePeliculas();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cargarPaises() {
    this.serviPeli.obtenerPaises().subscribe(dato => {
      console.log("Paises", dato);
      this.objPaises = dato;
    });
  }

  cargarGeneros() {
    this.serviPeli.obtenerGeneros().subscribe(dato => {
      console.log("Generos", dato);
      this.objGenero = dato;
    });
  }

  cargarDirectores() {
    this.serviPeli.obtenerDirectores().subscribe(dato => {
      console.log("Directores", dato);
      this.objDirector = dato;
    });
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Registro exitoso!',
      `La película <strong>${this.objPelicula.titulo}</strong> se ha registrado correctamente.`,
      'success'
    );
  }

  irALaListaDePeliculas() {
    this.router.navigate(['/peliculas']);
  }
}
