import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from '../utils/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class MenuAdminService {

  private baseUrl = 'http://localhost:8091/api/v1/menu'
  private options = {
    headers: {"Authorization": `Bearer ${JwtService.getToken() as string}`}
  }
  constructor(private httpClient : HttpClient) { }

  getMenuData():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`, this.options);
  }
}
