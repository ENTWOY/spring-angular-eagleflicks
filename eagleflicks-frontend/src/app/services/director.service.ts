import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from '../models/director';
import { Pais } from '../models/pais';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private baseURL = "http://localhost:8091/api/v1/directores";
  private baseURL2 = "http://localhost:8091/api/v1/paises";
  private options = {
    headers: {"Authorization": `Bearer ${JwtService.getToken() as string}`}
  }

  constructor(private httpClient : HttpClient) { }

  // Metodo que obtiene el listado
  obtenerListaDirectores():Observable<Director[]>{
    return this.httpClient.get<Director[]>(`${this.baseURL}`, this.options);
  }

  obtenerListaPaises():Observable<Pais[]>{
    return this.httpClient.get<Pais[]>(`${this.baseURL2}`, this.options);
  }

  registrarDirector(director:Director) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,director, this.options);
  }

  obtenerDirectorPorId(id:number) : Observable<Director>{
    return this.httpClient.get<Director>(`${this.baseURL}/${id}`, this.options);
  }

  actualizarDirector(id:number, director:Director) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, director, this.options);
  }

  eliminarDirector(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`, this.options);
  }
}
