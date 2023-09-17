import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from '../models/director';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private baseURL = "http://localhost:8091/api/v1/directores";
  private baseURL2 = "http://localhost:8091/api/v1/paises";

  constructor(private httpClient : HttpClient) { }

  // Metodo que obtiene el listado
  obtenerListaDirectores():Observable<Director[]>{
    return this.httpClient.get<Director[]>(`${this.baseURL}`);
  }

  obtenerListaPaises():Observable<Pais[]>{
    return this.httpClient.get<Pais[]>(`${this.baseURL2}`);
  }

  registrarDirector(director:Director) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,director);
  }

  obtenerDirectorPorId(id:number) : Observable<Director>{
    return this.httpClient.get<Director>(`${this.baseURL}/${id}`);
  }

  actualizarDirector(id:number, director:Director) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, director);
  }

  eliminarDirector(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
