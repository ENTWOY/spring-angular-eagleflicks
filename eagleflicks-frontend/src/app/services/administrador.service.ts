import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais';
import { Administrador } from '../models/administrador';
import { Director } from '../models/director';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private baseURL = "http://localhost:8091/api/v1/administradores";
  private baseURL2 = "http://localhost:8091/api/v1/paises";

  constructor(private httpClient : HttpClient) { }

  obtenerAdministradores():Observable<Administrador[]>{
    return this.httpClient.get<Administrador[]>(`${this.baseURL}`);
  }

  obtenerPaises():Observable<Pais[]>{
    return this.httpClient.get<Pais[]>(`${this.baseURL2}`);
  }

  registrarAdministrador(admin:Administrador) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, admin);
  }

  obtenerAdministradorPorId(id:number) : Observable<Administrador>{
    return this.httpClient.get<Administrador>(`${this.baseURL}/${id}`);
  }

  actualizarAdministrador(id:number, admin:Administrador) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, admin);
  }

  eliminarAdministrador(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
