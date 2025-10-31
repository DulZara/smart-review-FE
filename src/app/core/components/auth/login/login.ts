import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TEST_JWT_TOKEN } from '../../../../shared/utility/constant';

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
 
    

  constructor(private router: Router) {}

  login(): void {
    console.log("Working1 login");
    console.log("this.email ",this.email );
    console.log("this.password ",this.password );
    
    if (this.email === '3333' && this.password === '1234') {
            localStorage.setItem('token', this.fake);
      this.router.navigate(['/app/admin/dashboard']);
    } else if (this.email === '2222' && this.password === '1234') {
      this.router.navigate(['/app/student/home']);
    } else if (this.email === '1111' && this.password === '1111') { //teacher@example.com
      localStorage.setItem('token', TEST_JWT_TOKEN);
      console.log("teacher login");
      this.router.navigate(['/app/teacher/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
