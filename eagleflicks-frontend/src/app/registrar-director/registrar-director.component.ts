import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Director } from '../director';
import { Pais } from '../pais';
import { DirectorService } from '../director.service';

@Component({
  selector: 'app-registrar-director',
  templateUrl: './registrar-director.component.html',
  styleUrls: ['./registrar-director.component.css']
})
export class RegistrarDirectorComponent implements OnInit {

  objDirector : Director = new Director();
  objPaises: Pais[] = [];

  constructor(private directorServicio:DirectorService, private router:Router) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  onSubmit(){
    this.guardarDirector();
  }

  guardarDirector() {
    this.directorServicio.registrarDirector(this.objDirector).subscribe(
      dato => {
        console.log(dato);
        this.irALaListaDeDirectores();
      },
      error => {
        console.log(error);
      }
    );
  }

  irALaListaDeDirectores() {
    this.router.navigate(['/directores']);
  }

  cargarPaises() {
    this.directorServicio.obtenerListaPaises().subscribe(dato => {
      console.log("Paises", dato);
      this.objPaises = dato;
    });
  }

}
