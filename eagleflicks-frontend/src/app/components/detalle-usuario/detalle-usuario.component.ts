import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  id:number;
  objUsuario:Usuario;

  constructor(private route:ActivatedRoute, private serviUsuario:UsuarioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.objUsuario = new Usuario();
    this.obtenerUsuarioPorId();
  }

  obtenerUsuarioPorId() {
    this.serviUsuario.obtenerUsuarioPorId(this.id).subscribe(dato => {
      this.objUsuario = dato;
      Swal.fire(`Detalles Usuario`);
    });
  }
}
