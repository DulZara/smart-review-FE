import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, TemplateRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TeacherService } from '../../service/teacher-service';
interface ClassCard {
  code: string;
  title: string;
  description: string;
  nextSession: string;
  students: number;
  reviewCompletion: number;
  image: string;
}
@Component({
  // standalone: true,
  selector: 'app-classes',
  imports: [FormsModule,CommonModule,NgbModalModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
})
export class Classes {
    classes: any[] = [];
    constructor(private teacherService: TeacherService,private modalService: NgbModal) {}
    ngOnInit(): void {
    this.loadClasses();
  }
   loadClasses(): void {
    console.log("working");
    
    this.teacherService.getAllClasses(1).subscribe({
      next: (res) => (this.classes = res.body),
      error: (err) => console.error('Error fetching classes:', err),
    });
  }
  

  openModal(ngTemplate: TemplateRef<any>): void {
    this.modalService.open(ngTemplate, { centered: true, size: 'lg' }); 
  }
  onImageSelected(event: any): void {
    // const file = event.target.files[0];
    // if (file) {
    //   this.classForm.patchValue({ dp: file });
    // }
  }

  saveClass(modal: any): void {
    // if (this.classForm.valid) {
    //   const value = this.classForm.value;
    //   this.classes.push({
    //     code: `C${this.classes.length + 1}00`,
    //     title: value.className,
    //     nextSession: 'Not scheduled',
    //     students: 0,
    //     reviewCompletion: 0
    //   });
    //   modal.close();
    //   this.classForm.reset();
    // }
  }
  addClass(){

  }

}
