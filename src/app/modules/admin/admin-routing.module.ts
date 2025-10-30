import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './component/admin-dashboard/admin-dashboard';
import { AdminTeacher } from './component/admin-teacher/admin-teacher';
import { AdminStudent } from './component/admin-student/admin-student';

const routes: Routes = [
 {
     path: '',
     component: AdminDashboard,
     children: [
       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
       { path: 'dashboard', component: AdminDashboard },
       { path: 'teacher', component: AdminTeacher },
       { path: 'student', component: AdminStudent },
     ],
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
