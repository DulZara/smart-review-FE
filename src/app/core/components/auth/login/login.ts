import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  email = '';
  password = '';
  private fake = 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFUyI6WyJURUFDSEVSIl0sInN1YiI6IlNJVEhNSV9XIiwiaWF0IjoxNzYxODA1MDE3LCJleHAiOjE3NjIxNjUwMTd9.dPqX4d8PfXCHK2M3BVuq1Rkx4OB_iQrXxfchAstDgzI2B15iEAkb9jgp_fnQlABz8dycvj3xCS1_F3m-yoSBvQ'; // replace with server token
    

  constructor(private router: Router) {}

  login(): void {
    console.log("Working1 login");
    console.log("this.email ",this.email );
    console.log("this.password ",this.password );
    
    if (this.email === 'admin@example.com' && this.password === '1234') {
      this.router.navigate(['/app/admin/dashboard']);
    } else if (this.email === 'student@example.com' && this.password === '1234') {
      this.router.navigate(['/app/student/home']);
    } else if (this.email === '1111' && this.password === '1111') { //teacher@example.com
      localStorage.setItem('token', this.fake);
      console.log("teacher login");
      this.router.navigate(['/app/teacher/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
