import { Component, OnInit,  } from '@angular/core';
import { Credentials } from 'src/app/models';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credentials = {
    username: "",
    password: ""
  }

  passwordInput: HTMLInputElement | null;
  togglePassword: HTMLElement | null;

  constructor(private apiService: ApiService, private router: Router) {
    this.passwordInput = null;
    this.togglePassword = null;

  }

  ngOnInit() {
    this.showPassword();
  }

  //login function con error de contraseña
  login(form: NgForm){
    this.apiService.login(this.creds)
      .subscribe(() => {
        this.router.navigate(['/']);
      }, (err) => {
        alert("Usuario o contraseña incorrectos");
      })
  }


  /*login(form: NgForm){
    this.apiService.login(this.creds)
      .subscribe(() => {
        this.router.navigate(['/']);
      })
  }*/

  showPassword() {
    this.passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    this.togglePassword = document.getElementById('togglePassword');

    if (this.passwordInput && this.togglePassword) {
      this.togglePassword.addEventListener('click', () => {
        if (this.passwordInput!.type === 'password') {
          this.passwordInput!.type = 'text';
          this.togglePassword!.classList.remove('fa-eye-slash');
          this.togglePassword!.classList.add('fa-eye');
        } else {
          this.passwordInput!.type = 'password';
          this.togglePassword!.classList.remove('fa-eye');
          this.togglePassword!.classList.add('fa-eye-slash');
        }
      });
    }
  }
}

