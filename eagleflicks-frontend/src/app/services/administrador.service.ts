import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais';
import { Administrador } from '../models/administrador';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private baseURL = "http://localhost:8091/api/v1/administradores";
  private baseURL2 = "http://localhost:8091/api/v1/paises";
  private options = {
    headers: {"Authorization": `Bearer ${JwtService.getToken() as string}`}
  }

  constructor(private httpClient : HttpClient) { }

  obtenerAdministradores():Observable<Administrador[]>{
    return this.httpClient.get<Administrador[]>(`${this.baseURL}`, this.options);
  }

  obtenerPaises():Observable<Pais[]>{
    return this.httpClient.get<Pais[]>(`${this.baseURL2}`, this.options);
  }

  registrarAdministrador(admin:Administrador) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, admin, this.options);
  }

  obtenerAdministradorPorId(id:number) : Observable<Administrador>{
    return this.httpClient.get<Administrador>(`${this.baseURL}/${id}`, this.options);
  }

  actualizarAdministrador(id:number, admin:Administrador) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, admin, this.options);
  }

  eliminarAdministrador(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`, this.options);
  }
}
