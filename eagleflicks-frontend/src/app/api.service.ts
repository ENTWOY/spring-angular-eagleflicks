import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";
import { Credentials } from "./models";
import { Injectable } from "@angular/core";

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
            responseType: 'text'
    }).pipe(map((response) => {


            // const bearerToken = headers.get('Authorization')!;
            // console.log(headers.get('Authorization'));
            console.log(response);
            // const token = bearerToken.replace("Bearer ", '');
            const body = response.body;
            // localStorage.setItem("token", token);
            return body;
        }));
    }

    getToken(){
        return localStorage.getItem("token");
    }
}