import { Component, signal, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  // standalone: true,
 imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './app-layout.html',
  styleUrls: ['./app-layout.scss']
})
export class AppLayout {
  open = signal(false);
  expanded = signal<Record<string, boolean>>({
    admin: false,
    student: false,
    teacher: false
  });

  private router = inject(Router);
  private auth = inject(AuthService);

  toggle() {
    this.open.update(v => !v);
  }

  toggleSection(section: 'admin' | 'student' | 'teacher') {
    this.expanded.update(state => ({
      ...state,
      [section]: !state[section]
    }));
  }

  isExpanded(section: 'admin' | 'student' | 'teacher') {
    return this.expanded()[section];
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
