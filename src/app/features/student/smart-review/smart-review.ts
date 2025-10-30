import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  // standalone: true,
  selector: 'app-smart-review',
  imports: [MatCardModule, MatButtonModule],
  template: `
  <div class="container">
    <mat-card class="card">
      <h3 class="h3">Suggested Reviews (Today)</h3>
      <ul>
        <li>Algebra �?" Quadratic formula</li>
        <li>Science �?" Photosynthesis</li>
        <li>History �?" World War II dates</li>
      </ul>
      <div class="mt-4">
        <button mat-raised-button color="primary">Start Review</button>
      </div>
    </mat-card>
  </div>
  `
})
export class SmartReview {

}

