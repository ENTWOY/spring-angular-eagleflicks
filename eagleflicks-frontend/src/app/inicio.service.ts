import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private baseUrl = 'http://localhost:8091/api/home/pelicula';

  constructor(private httpClient: HttpClient) { }

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl}`);
  }

  obtenerPeliculaPorId(id:number) : Observable<Pelicula>{
    return this.httpClient.get<Pelicula>(`${this.baseUrl}/${id}`);
  }
}
