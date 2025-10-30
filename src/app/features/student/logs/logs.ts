import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  // standalone: true,
  selector: 'app-logs',
  imports: [MatCardModule],
  template: `
  <div class="container">
    <mat-card class="card">
      <h3 class="h3">Study Logs</h3>
      <p class="muted">No logs yet. After a review, logs will appear here.</p>
    </mat-card>
  </div>
  `
})
export class Logs {

}

