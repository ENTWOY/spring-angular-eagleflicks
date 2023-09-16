import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private baseUrl = "http://localhost:8091/api/v1/actores";

  constructor(private httpClient : HttpClient) { }

  obtenerListaActores():Observable<Actor[]>{
    return this.httpClient.get<Actor[]>(`${this.baseUrl}`);
  }

  registrarActor(actor:Actor) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`,actor);
  }

  obtenerActorPorId(id:number) : Observable<Actor>{
    return this.httpClient.get<Actor>(`${this.baseUrl}/${id}`);
  }

  actualizarActor(id:number, actor:Actor) : Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, actor);
  }

  eliminarActor(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
