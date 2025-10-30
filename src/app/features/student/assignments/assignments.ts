import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  // standalone: true,
  selector: 'app-assignments',
  imports: [MatCardModule],
  template: `
  <div class="container">
    <mat-card class="card">
      <h3 class="h3">Assignments</h3>
      <ul>
        <li>Math worksheet �?" Due: 25 Oct</li>
        <li>Essay draft �?" Due: 28 Oct</li>
      </ul>
    </mat-card>
  </div>
  `
})
export class Assignments {

}

