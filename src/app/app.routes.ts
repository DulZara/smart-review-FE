import { Routes } from '@angular/router';
import { MainLayout } from './core/components/main-layout/main-layout';
import { Login } from './core/components/auth/login/login';

export const routes: Routes = [
  // public route (login)
  { path: 'login', component: Login },

  // protected app layout
  {
    path: 'app',
    component: MainLayout,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./modules/admin/admin.module').then((m) => m.AdminModule)
      },
      // {
      //   path: 'student',
      //   loadChildren: () =>
      //     import('./modules/student/student.module').then((m) => m.StudentModule)
      // },
      {
        path: 'teacher',
        loadChildren: () =>
          import('./modules/teacher/teacher.module').then((m) => m.TeacherModule)
      },
      { path: '', redirectTo: 'student', pathMatch: 'full' }
    ]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
