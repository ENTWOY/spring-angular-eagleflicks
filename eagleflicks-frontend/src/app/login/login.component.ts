import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordInput: HTMLInputElement | null;
  togglePassword: HTMLElement | null;

  constructor() {
    this.passwordInput = null;
    this.togglePassword = null;
  }

  ngOnInit() {
    this.showPassword();
  }

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

