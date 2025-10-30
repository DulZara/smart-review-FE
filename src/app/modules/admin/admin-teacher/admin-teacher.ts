import { Component } from '@angular/core';
import { Teacher } from '../../../core/models/teacher.model';
import { AdminDataService } from '../../../core/services/admin-data.service';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-teacher',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './admin-teacher.html',
  styleUrl: './admin-teacher.scss',
})
export class AdminTeacher {
  page = 1;
  pageSize = 4;

  teachers: Teacher[] = [];
  total = 0;

  constructor(private data: AdminDataService) {
    this.load();
  }

  load() {
    const res = this.data.getTeachers(this.page, this.pageSize);
    this.teachers = res.data;
    this.total = res.total;
  }

  totalPages(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  goToPage(p: number) {
    if (p >= 1 && p <= this.totalPages()) {
      this.page = p;
      this.load();
    }
  }

  pagesArray(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      pages.push(i);
    }
    return pages;
  }
}
