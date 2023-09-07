import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from './pelicula';
import { Pais } from './pais';
import { Director } from './director';
import { Genero } from './genero';
import { Actor } from './actor';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private baseUrl = 'http://localhost:8091/api/movie/pelicula';
  private baseUrl2 = 'http://localhost:8091/api/movie/pais';
  private baseUrl3 = 'http://localhost:8091/api/movie/director';
  private baseUrl4 = 'http://localhost:8091/api/movie/genero';
  private baseUrl5 = 'http://localhost:8091/api/movie/actor';

  constructor(private httpClient: HttpClient) { }

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl}`);
  }

  obtenerPaises(): Observable<Pais[]> {
    return this.httpClient.get<Pais[]>(`${this.baseUrl2}`);
  }

  obtenerDirectores(): Observable<Director[]> {
    return this.httpClient.get<Director[]>(`${this.baseUrl3}`);
  }

  obtenerGeneros(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(`${this.baseUrl4}`);
  }

  obtenerActores(): Observable<Actor[]> {
    return this.httpClient.get<Actor[]>(`${this.baseUrl5}`);
  }

  /* Registra y actualiza la entidad pelicula */
  registrarPelicula(objPeli: Pelicula, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('stringPeli', JSON.stringify(objPeli));
    return this.httpClient.post(`${this.baseUrl}`, formData).toPromise();
  }


  eliminarPelicula(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  obtenerPeliculaPorId(id:number) : Observable<Pelicula>{
    return this.httpClient.get<Pelicula>(`${this.baseUrl}/${id}`);
  }
}
