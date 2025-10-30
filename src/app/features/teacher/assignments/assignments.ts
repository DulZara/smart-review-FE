import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';              // <- add this
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Material is optional here, you can keep or remove
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { AddAssignment } from "../add-assignment/add-assignment";

type Tab = 'overview' | 'topics' | 'assignments' | 'students';
interface AssignmentRow {
  dueISO: string;
  title: string;
  topic: string;
  status: 'Published' | 'Closed' | 'Draft';
  submitted: number;
  graded: number;
}

@Component({
  selector: 'app-assignments',
  // standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatListModule,
    AddAssignment
],
  templateUrl: './assignments.html',
  styleUrls: ['./assignments.scss'],
})
export class Assignments {
  //   constructor(
  //   private modalService: NgbModal
  // ) { }
  title = 'Grade 10 Maths';
  tab: Tab = 'assignments';

  q = '';
  assignments: AssignmentRow[] = [
    { dueISO:'2024-05-15', title:'Algebra Quiz 1',     topic:'Algebra',      status:'Published', submitted:25, graded:20 },
    { dueISO:'2024-05-10', title:'Geometry Quiz 2',    topic:'Geometry',     status:'Closed',    submitted:20, graded:20 },
    { dueISO:'2024-05-05', title:'Calculus Quiz 3',    topic:'Calculus',     status:'Draft',     submitted:15, graded:15 },
    { dueISO:'2024-04-30', title:'Statistics Quiz 4',  topic:'Statistics',   status:'Published', submitted:30, graded:25 },
    { dueISO:'2024-04-25', title:'Trigonometry Quiz 5',topic:'Trigonometry', status:'Closed',    submitted:10, graded:10 },
  ];

  filtered() {
    const t = this.q.trim().toLowerCase();
    if (!t) return this.assignments;
    return this.assignments.filter(a =>
      a.title.toLowerCase().includes(t) || a.topic.toLowerCase().includes(t)
    );
  }

  setTab(t: Tab) { this.tab = t; }
  is(t: Tab) { return this.tab === t; }

  //   onAddAssignment(ngTemplate: TemplateRef<any>): void {
  //   this.modalService.open(ngTemplate, { centered: true, size: 'sm' });
  // }

      onAddAssignment(ngTemplate: TemplateRef<any>): void {
    // this.modalService.open(ngTemplate, { centered: true, size: 'sm' });
  }

}
