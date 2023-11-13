import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';
import { Pais } from '../models/pais';
import { Director } from '../models/director';
import { Genero } from '../models/genero';
import { Actor } from '../models/actor';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private baseUrl = 'http://localhost:8091/api/movie/pelicula';
  private baseUrl2 = 'http://localhost:8091/api/movie/pais';
  private baseUrl3 = 'http://localhost:8091/api/movie/director';
  private baseUrl4 = 'http://localhost:8091/api/movie/genero';
  private baseUrl5 = 'http://localhost:8091/api/movie/actor';
  private baseUrl6 = 'http://localhost:8091/api/movie/buscar';

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
    return this.httpClient.post(`${this.baseUrl}`, formData, {
      headers: {"Authorization":`Bearer ${JwtService.getToken()}`}
    }).toPromise();
  }


  eliminarPelicula(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {
      headers: {"Authorization":`Bearer ${JwtService.getToken()}`}
    });
  }

  obtenerPeliculaPorId(id:number) : Observable<Pelicula>{
    return this.httpClient.get<Pelicula>(`${this.baseUrl}/${id}`);
  }

  obtenerReportePDF(): Observable<Blob> {
    const url = `${this.baseUrl}/pelicula_report_pdf`;
    return this.httpClient.get(url, { responseType: 'blob' });
  }

  findByPeliculaGeneroIdGenero(codGenero: number): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${this.baseUrl6}/genero?codGenero=${codGenero}`);
  }
}
