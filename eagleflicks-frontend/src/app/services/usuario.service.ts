import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = "http://localhost:8091/api/v1/usuarios";
  private options = {
    headers: {"Authorization": `Bearer ${JwtService.getToken() as string}`}
  }
  constructor(private httpClient : HttpClient) { }

  obtenerListaUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}`, this.options);
  }

  registrarUsuario(usuario:Usuario) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, usuario, this.options);
  }

  obtenerUsuarioPorId(id:number) : Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseUrl}/${id}`, this.options);
  }

  actualizarUsuario(id:number, usuario:Usuario) : Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, usuario, this.options);
  }

  eliminarUsuario(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`, this.options);
  }
}
