import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private baseUrl = "http://localhost:8091/api/v1/actores";
  private options = {
    headers: {"Authorization": `Bearer ${JwtService.getToken() as string}`}
  }

  constructor(private httpClient : HttpClient) { }

  obtenerListaActores():Observable<Actor[]>{
    return this.httpClient.get<Actor[]>(`${this.baseUrl}`, this.options);
  }

  registrarActor(actor:Actor) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`,actor, this.options);
  }

  obtenerActorPorId(id:number) : Observable<Actor>{
    return this.httpClient.get<Actor>(`${this.baseUrl}/${id}`, this.options);
  }

  actualizarActor(id:number, actor:Actor) : Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, actor, this.options);
  }

  eliminarActor(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`, this.options);
  }
}
