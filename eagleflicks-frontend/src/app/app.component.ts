import { Component } from '@angular/core';
import { JwtService } from './utils/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router
  ){}

  title = 'Spring Backend and Angular Frontend';
  tokenExists = () => JwtService.tokenExists();
  isUser = () => JwtService.getClaim("role") === "USER"
  isAdmin = () => JwtService.getClaim("role") === "ADMIN"
  getUserId = () => JwtService.getUserId()
  logout = () => {
    JwtService.removeToken();
    this.router.navigate(["/"]);
  }
}
