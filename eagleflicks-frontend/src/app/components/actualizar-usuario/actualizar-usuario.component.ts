import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id:number;
  objUsuario:Usuario = new Usuario();

  constructor(private serviUsuario:UsuarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerUsuarioPorId();
  }

  onSubmit() {
    this.actualizarUsuario();
  }

  actualizarUsuario() {
    this.serviUsuario.actualizarUsuario(this.id, this.objUsuario).subscribe(
      dato => {
        this.mostrarMensajeExito();
        this.irAlaListaDeUsuarios();
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerUsuarioPorId() {
    this.serviUsuario.obtenerUsuarioPorId(this.id).subscribe(dato => {
      this.objUsuario = dato;
    });
  }

  irAlaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
  }

  mostrarMensajeExito() {
    Swal.fire(
      '¡Actualización exitosa!',
      `El usuario <strong>${this.objUsuario.nombre}</strong> se ha actualizado correctamente.`,
      'success'
    );
  }
}
