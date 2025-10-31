import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
          import('./component/admin-dashboard/admin-dashboard').then(
            (m) => m.AdminDashboard
          ),
      },
      {
        path: 'teachers',
        loadComponent: () =>
          import('./component/admin-teacher/admin-teacher').then((m) => m.AdminTeacher),
      },
      {
        path: 'students',
        loadComponent: () =>
          import('./component/admin-student/admin-student').then((m) => m.AdminStudent),
      },
      {
        path: 'student', // ✅ add this
        loadComponent: () =>
          import('./component/admin-student/admin-student').then((m) => m.AdminStudent),
      },
      {
        path: 'teacher',
        loadComponent: () =>
          import('./component/admin-teacher/admin-teacher').then((m) => m.AdminTeacher),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
