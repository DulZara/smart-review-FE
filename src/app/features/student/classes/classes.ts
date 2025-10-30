import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  // standalone: true,
  selector: 'app-classes',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  template: `
  <div class="container">
    <mat-card class="card">
      <h3 class="h3">Join a Class</h3>
      <form [formGroup]="form" (ngSubmit)="join()">
        <mat-form-field appearance="outline" style="width:100%;">
          <mat-label>Join Code</mat-label>
          <input matInput formControlName="code" required>
        </mat-form-field>
        <button mat-raised-button color="primary" [disabled]="form.invalid">Join</button>
      </form>
    </mat-card>
  </div>
  `
})
export class Classes {
  form = new FormBuilder().group({ code: ['', Validators.required] });
  join() { alert('Joined with code: ' + this.form.value.code); }
}

