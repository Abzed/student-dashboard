import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private roles: string[] = [];

  isLoggedIn = false;
  isLoggedOut = true;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isLoggedOut = false;
      this.showAdminBoard = false;
      this.showModeratorBoard = false;
      this.username = user.username;
    }
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    
  }

}
