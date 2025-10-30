import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './component/admin-dashboard/admin-dashboard';
import { AdminTeacher } from './component/admin-teacher/admin-teacher';
import { AdminStudent } from './component/admin-student/admin-student';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin-base/admin-base').then((m) => m.AdminBase),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./admin-dashboard/admin-dashboard').then(
            (m) => m.AdminDashboard
          ),
      },
      {
        path: 'teachers',
        loadComponent: () =>
          import('./admin-teacher/admin-teacher').then((m) => m.AdminTeacher),
      },
      {
        path: 'students',
        loadComponent: () =>
          import('./admin-student/admin-student').then((m) => m.AdminStudent),
      },
      {
        path: 'student', // ✅ add this
        loadComponent: () =>
          import('./admin-student/admin-student').then((m) => m.AdminStudent),
      },
      {
        path: 'teacher',
        loadComponent: () =>
          import('./admin-teacher/admin-teacher').then((m) => m.AdminTeacher),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
