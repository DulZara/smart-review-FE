import { Component } from '@angular/core';
import { Student } from '../../../../core/models/student.model';
import { AdminDataService } from '../../../../core/services/admin-data.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-student',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-student.html',
  styleUrl: './admin-student.scss',
})
export class AdminStudent {
   page = 1;
  pageSize = 5;
  students: any[] = [];
  total = 0;
  isModalOpen = false;
  studentForm!: FormGroup;

  constructor(private data: AdminDataService, private fb: FormBuilder) {
    this.initForm();
    this.load();
  }

  // ✅ Initialize form with validators
  initForm() {
    this.studentForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z0-9_-]+$/)]],
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/)]],
      mobileNumber: ['', [Validators.pattern(/^(?:$|(?:\+94|0)7\d{8})$/)]],
      role: ['STUDENT', Validators.required],
    });
  }

  get f() {
    return this.studentForm.controls;
  }

  load() {
    this.data.getStudents(this.page - 1, this.pageSize).subscribe({
      next: (res: any) => {
        const pageData = res.body;
        this.students = pageData?.content || [];
        this.total = pageData?.totalElements || 0;
      },
      error: (err) => {
        console.error('Failed to load students:', err);
        alert('Error loading students. Please try again later.');
      },
    });
  }

  // ✅ Modal controls
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.studentForm.reset({ role: 'STUDENT' });
  }

  // ✅ Submit form
  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const formData = this.studentForm.value;
    console.log('Submitting student:', formData);

    this.data.addStudent(formData).subscribe({
      next: () => {
        alert('Student added successfully!');
        this.closeModal();
        this.load(); 
      },
      error: (err) => {
        console.error('Error adding student:', err);
        alert('Failed to add student.');
      },
    });
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
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
}