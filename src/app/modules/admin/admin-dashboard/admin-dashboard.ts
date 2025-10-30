import { Component, OnInit } from '@angular/core';
import { AdminStats } from '../../../core/models/stats.model';
import { AdminDataService } from '../../../core/services/admin-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard implements OnInit {
  statsCards: { label: string; value: number | string }[] = [];

  constructor(private data: AdminDataService) {}

  ngOnInit(): void {
    const stats: AdminStats = this.data.getAdminStats();
    this.statsCards = [
      { label: 'Total Students', value: stats.totalStudents },
      { label: 'Total Teachers', value: stats.totalTeachers },
      { label: 'Total Classes', value: stats.totalClasses },
      { label: 'Active Students Today', value: stats.activeToday },
      { label: 'New Signups (7-day)', value: stats.newSignups7d },
    ];
  }
}
