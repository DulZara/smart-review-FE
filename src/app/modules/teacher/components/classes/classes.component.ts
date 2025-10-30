import { Component, TemplateRef } from '@angular/core';
import {NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TeacherService } from '../../services/teacher.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [FormsModule,CommonModule,NgbModalModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {

  classes: any[] = [];
  constructor(private teacherService: TeacherService,private modalService: NgbModal) {}
    ngOnInit(): void {

  }

  // New class object
  newClass = {
    className: '',
    description: '',
    dp: null as File | null
  };


  // open modal
  openModal(templateRef: TemplateRef<any>) {
    this.modalService.open(templateRef, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    });
  }

  // file select
  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.newClass.dp = file;
    }
  }

  // form submit
  saveClass(form: NgForm): void {
    if (form.valid) {
      console.log('New class submitted:', this.newClass);
      // TODO: Call your API to save this.newClass
      this.classes.push({
        title: this.newClass.className,
        description: this.newClass.description,
        image: this.newClass.dp ? URL.createObjectURL(this.newClass.dp) : 'https://via.placeholder.com/200',
        code: 'C' + (this.classes.length + 1),
        nextSession: 'TBA',
        students: 0,
        reviewCompletion: 0
      });

      // reset form
      form.resetForm();
      this.newClass.dp = null;
      this.modalService.dismissAll();
    } else {
      console.warn('Form is invalid');
    }
  }
  
}
