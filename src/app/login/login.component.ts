import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import jwt_decode from 'jwt-decode';
import { NgForm } from '@angular/forms';
import { Auth } from '../apiclass';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: Auth = {
    username: '',
    password: ''
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  // newData:any = []

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().username;
    }
  }

  onSubmit(): void {
    const data = {
      username: this.form.username,
      password: this.form.password
    }
    this.authService.login(data.username, data.password).pipe(first()).subscribe(
      data => {                
        this.tokenStorage.saveToken(data);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().username;
        this.route.navigate(['/']);
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
