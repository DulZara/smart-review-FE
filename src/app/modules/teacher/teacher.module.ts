import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TeacherRoutingModule } from './teacher-routing.module';
import { ClassesComponent } from './components/classes/classes.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    TeacherRoutingModule,
    ClassesComponent,
    TeacherDashboardComponent,
    MessagesComponent
  ],
})
export class TeacherModule {}
