import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private baseUrl = 'http://localhost:8091/api/home/pelicula';
  private baseUrl2 = 'http://localhost:8091/api/movie/pelicula';
  private baseUrl3 = 'http://localhost:8091/api/home/sorprendeme';
  private baseUrl4 = 'http://localhost:8091/api/home/similar';


  constructor(private httpClient: HttpClient) { }

  /* Listado invertido de peliculas en la vista inicio */
  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl}`);
  }

  /* Listado normal de peliculas en la vista biblioteca */
  obtenerListadoPeliculas(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl2}`);
  }

  /* Listado aleatorio de peliculas en la vista sorprendeme */
  obtenerPeliculasAleatorias(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl3}`);
  }

  obtenerPeliculaSimilar(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl4}`);
  }

  /* Detalle pelicula en ver-pelicula */
  obtenerPeliculaPorId(id:number) : Observable<Pelicula>{
    return this.httpClient.get<Pelicula>(`${this.baseUrl}/${id}`);
  }

  // Metodo de busqueda por titulo
  buscarPeliculaXTitulo(title: string): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl}/buscar?titulo=${title}`);
  }
  
  // Metodo de busqueda por anio
  buscarPeliculaXAnio(anio: number): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl}/obtener?anio=${anio}`);
  }
}
