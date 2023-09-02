import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { Router } from '@angular/router';
import { Director } from '../director';

@Component({
  selector: 'app-lista-directores',
  templateUrl: './lista-directores.component.html',
  styleUrls: ['./lista-directores.component.css']
})
export class ListaDirectoresComponent implements OnInit {

  objDirector:Director[];

  constructor(private directorServicio:DirectorService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerDirectores();
  }

  private obtenerDirectores() {
    this.directorServicio.obtenerListaDirectores().subscribe(dato => {
      console.log(dato);
      this.objDirector = dato;
    });
  }

  actualizarDirector(id:number) {
    this.router.navigate(['actualizar-director', id]);
  }

  detalleDirector(id:number) {
    this.router.navigate(['detalle-director', id]);
  }

  eliminarDirector(id: number) {
    this.directorServicio.eliminarDirector(id).subscribe(dato => {
      console.log(dato);
      this.obtenerDirectores();
        alert(`El directo con id: ${id} ha sido eliminado.`);
    });
  }  
}