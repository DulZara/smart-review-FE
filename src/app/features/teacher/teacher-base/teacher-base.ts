import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teacher-base',
  // standalone: true,
  imports: [RouterOutlet],
  templateUrl: './teacher-base.html',
  styleUrls: ['./teacher-base.scss'],
})
export class TeacherBase {}
