import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Assignments } from "../assignments/assignments";
import { Students } from "../students/students";
import { Topic } from "../topic/topic";
import { Overview } from "../overview/overview";

type Tab = 'overview' | 'topics' | 'assignments' | 'students';

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatListModule, Assignments, Students, Topic, Overview],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard {
  title = 'Grade 10 Maths';
  tab: Tab = 'overview';


  setTab(t: Tab) { this.tab = t; }
  is(t: Tab) { return this.tab === t; }
}
