import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserDetails } from '../apiclass';
import { Students } from '../apiclass';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // students: Students = {
  //   account: {username: '', first_name: '', last_name: '', email: '', password: ''},
  //   avatar:'',
  //   gender:'',
  //   location: '',
  //   stack:''
  // }

  students?:any;
  
  isLoggedIn = false;

  user: UserDetails = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
  }

  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }
  
  ngOnInit(): void {
    this.userService.getAllStudents().subscribe(
      data => {
        console.log(data.data[0]);
        this.students = data.data
        this.user.username = this.tokenStorage.getUser().username
        this.user.first_name = this.tokenStorage.getUser().first_name
        this.user.last_name = this.tokenStorage.getUser().last_name
        this.user.email = this.tokenStorage.getUser().email
        
        this.isLoggedIn = true
      },
      err => {
        this.students = JSON.parse(err.error).message;
      }
    );

  }

  

}
