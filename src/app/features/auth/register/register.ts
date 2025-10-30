import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  // standalone: true,
  selector: 'app-register',
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card>
      <h2>Register</h2>
      <!-- TODO: form -->
    </mat-card>
  `
})
export class Register {

}

