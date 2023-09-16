import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit  {

  objUsuario:Usuario = new Usuario();

  constructor(private serviUsuario:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.guardarUsuario();
  }

  guardarUsuario() {
    this.serviUsuario.registrarUsuario(this.objUsuario).subscribe(
      dato => {
        console.log(dato);
        this.mostrarMensajeExito();
        this.irALaListaDeUsuarios();
      },
      error => {
        console.log(error);
      }
    );
  }

  irALaListaDeUsuarios() {
    this.router.navigate(['/usuarios']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Registro exitoso!',
      `El usuario <strong>${this.objUsuario.nombre}</strong> se ha registrado correctamente.`,
      'success'
    );
  }
}
