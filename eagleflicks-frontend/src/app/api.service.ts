import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";
import { Credentials } from "./models";
import { Injectable } from "@angular/core";
import { JwtService } from "./utils/jwt.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    constructor(
        private http:HttpClient
    ){}
    login(creds: Credentials){
        return this.http.post("http://localhost:8091/login", creds, {
            observe: 'response',
            responseType: 'json'
    }).pipe(map((response: HttpResponse<any>) => {
            console.log(response.body["token"]);
            JwtService.storeToken(response.body["token"]);
        }));
    }
}