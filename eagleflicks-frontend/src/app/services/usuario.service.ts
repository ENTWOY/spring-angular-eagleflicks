import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = "http://localhost:8091/api/v1/usuarios";

  constructor(private httpClient : HttpClient) { }

  obtenerListaUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}`);
  }

  registrarUsuario(usuario:Usuario) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, usuario);
  }

  obtenerUsuarioPorId(id:number) : Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  actualizarUsuario(id:number, usuario:Usuario) : Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, usuario);
  }

  eliminarUsuario(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
