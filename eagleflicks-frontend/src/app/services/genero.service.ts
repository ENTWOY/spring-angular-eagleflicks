import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private baseUrl = "http://localhost:8091/api/v1/generos";

  constructor(private httpClient : HttpClient) { }

  obtenerListaGeneros():Observable<Genero[]>{
    return this.httpClient.get<Genero[]>(`${this.baseUrl}`);
  }

  registrarGenero(genero:Genero) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`,genero);
  }

  obtenerGeneroPorId(id:number) : Observable<Genero>{
    return this.httpClient.get<Genero>(`${this.baseUrl}/${id}`);
  }

  actualizarGenero(id:number, genero:Genero) : Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, genero);
  }

  eliminarGenero(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
