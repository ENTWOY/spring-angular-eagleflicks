import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private baseUrl = "http://localhost:8091/api/v1/generos";
  private options = {
    headers: {"Authorization": `Bearer ${JwtService.getToken() as string}`}
  }

  constructor(private httpClient : HttpClient) { }

  obtenerListaGeneros():Observable<Genero[]>{
    return this.httpClient.get<Genero[]>(`${this.baseUrl}`, this.options);
  }

  registrarGenero(genero:Genero) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, genero, this.options);
  }

  obtenerGeneroPorId(id:number) : Observable<Genero>{
    return this.httpClient.get<Genero>(`${this.baseUrl}/${id}`, this.options);
  }

  actualizarGenero(id:number, genero:Genero) : Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, genero, this.options);
  }

  eliminarGenero(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`, this.options);
  }
}
