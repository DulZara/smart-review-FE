import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
  // standalone: true,
  selector: 'app-login',
  imports: [CommonModule, RouterLink, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  styles: [`
    .wrap { min-height: 100vh; display: grid; place-items: center; padding: 16px; background:#fff; }
    mat-card { width: 100%; max-width: 420px; padding: 8px 8px 16px; }
    .actions { display:flex; justify-content: space-between; align-items:center; margin-top: 8px; }
    .row { display:flex; justify-content: space-between; align-items:center; margin-top: 12px; }
  `],
  template: `
    <div class="wrap">
      <mat-card>
        <h2 style="margin:8px 16px;">Login</h2>
        <form [formGroup]="form" (ngSubmit)="submit()" style="padding:0 16px;">
          <mat-form-field appearance="outline" style="width:100%;">
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email" required>
          </mat-form-field>
          <mat-form-field appearance="outline" style="width:100%;">
            <mat-label>Password</mat-label>
            <input matInput type="password" formControlName="password" required>
          </mat-form-field>
          <div class="actions">
            <a routerLink="/auth/forgot">Forgot password?</a>
            <button mat-raised-button color="primary" [disabled]="form.invalid">Login</button>
          </div>
        </form>
      </mat-card>
    </div>
  `
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private auth = inject(AuthService);
  form = this.fb.group({ email: ['', [Validators.required, Validators.email]], password: ['', Validators.required] });
  submit() {
    if (this.form.invalid) return;
    // Demo: set fake token so API calls include bearer
    this.auth.login(this.form.value.email!, this.form.value.password!);
    this.router.navigateByUrl('/app/student/dashboard');
  }

}
