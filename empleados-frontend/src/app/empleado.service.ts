import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  // URL que Obtiene el listado de los empleados del backend
  private baseURL = "http://localhost:8091/api/employee/empleados";

  constructor(private httpClient : HttpClient) { }

  // Metodo que obtienes a los empleados
  obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  // Metodo para guardar a un empleado
  registrarEmpleado(empleado:Empleado) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  // Metodo para actualizar un empleado
  actualizarEmpleado(id:number, empleado:Empleado) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
  }

  // Metodo para obtener un empleado
  obtenerEmpleadoPorId(id:number) : Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  // Metodo para eliminar un empleado
  eliminarEmpleado(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
