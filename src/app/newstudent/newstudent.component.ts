import { Component, OnInit } from '@angular/core';
import { Students } from '../apiclass';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {

    students: Students = {
    account: {username: 'student07', first_name: 'Student', last_name: '07', email: 'student07@ms.com', password: 'Zed.z1z0'},
    avatar: '',
    gender:'',
    location: '',
    stack:''
  }

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {}

  onFileSelected(event: Event){
    // console.log(event.target.file[0].name);
    if (event.target != null) {
      // if (event.target.files && event.target.files[0]) {  
      this.students.avatar = (event.target as HTMLInputElement).files
      this.students.avatar = this.students.avatar[0]
      console.log(this.students.avatar);
      
    }
  }



  saveStudent(): void {
    const data = {
      account: this.students.account,
      avatar: this.students.avatar,
      gender: this.students.gender,
      location: this.students.location,
      stack: this.students.stack,
    };

    console.log(data);
      
    this.apiService.addStudent(data).subscribe(
      response => {
        console.log(response);   
        // this.reloadPage();     
      },
      error => {
        console.log(error);        
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }


}
