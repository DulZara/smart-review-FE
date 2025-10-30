import { inject, Injectable } from '@angular/core';
import { AdminStats } from '../models/stats.model';
import { Student } from '../models/student.model';
import { Teacher } from '../models/teacher.model';
import { MessageThreadPreview } from '../models/message.model';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AdminDataService {
   private http = inject(HttpClient);
  private readonly API_BASE = 'http://localhost:8090'; // ✅ update your backend URL

  getAdminStats(): AdminStats {
    return {
      totalStudents: 500,
      totalTeachers: 50,
      totalClasses: 100,
      activeToday: 100, // screenshot shows Active Students Today 100
      newSignups7d: 35,
    };
  }

  getStudents(page = 1, pageSize = 10) {
  const params = new HttpParams()
    .set('page', page)
    .set('size', pageSize)
    .set('role', 'STUDENT');

  return this.http
    .get(`${this.API_BASE}/api/v1/admin`, { params })
    .pipe(
      catchError((error) => {
        console.error('Error fetching students:', error);
        return throwError(() => new Error('Failed to load student data'));
      })
    );
}
addStudent(studentData: any) {
  return this.http.post(`${this.API_BASE}/auth/sign-up`, studentData).pipe(
    catchError((error) => {
      console.error('Error adding student:', error);
      return throwError(() => new Error('Failed to add student'));
    })
  );
}
  getTeachers(page = 1, pageSize = 4): { data: Teacher[]; total: number } {
    const all: Teacher[] = [
      { id: 1, name: 'Mr. Perera', subject: 'Mathematics' },
      { id: 2, name: 'Ms. Silva', subject: 'Science' },
      { id: 3, name: 'Mr. Fernando', subject: 'English' },
      { id: 4, name: 'Ms. Rajapaksa', subject: 'History' },
      { id: 5, name: 'Mr. Jayasuriya', subject: 'ICT' },
      { id: 6, name: 'Ms. Kumudini', subject: 'Biology' },
    ];

    const start = (page - 1) * pageSize;
    const data = all.slice(start, start + pageSize);
    return { data, total: all.length };
  }

  getMessageThreads(): MessageThreadPreview[] {
    return [
      {
        id: 1,
        senderName: 'Kavinda',
        lastMessage: 'Hey, how was the test?',
        timeLabel: '10:30 AM',
      },
      {
        id: 2,
        senderName: 'Dulsara',
        lastMessage: "Don't forget the assignment!",
        timeLabel: 'Yesterday',
      },
      {
        id: 3,
        senderName: 'Vihaga',
        lastMessage: 'See you in class',
        timeLabel: '2 days ago',
      },
      {
        id: 4,
        senderName: 'Nuwan',
        lastMessage: "Let's study together",
        timeLabel: '3 days ago',
      },
    ];
  }
}
