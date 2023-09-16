import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuAdminService {

  private baseUrl = 'http://localhost:8091/api/v1/menu'

  constructor(private httpClient : HttpClient) { }

  getMenuData():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`);
  }
}
