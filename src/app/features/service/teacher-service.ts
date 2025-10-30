import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private readonly baseUrl = 'http://localhost:8090/api/v1/';

  constructor(private http: HttpClient) {}

  getAllClasses(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJST0xFUyI6WyJST0xFX1RFQUNIRVIiXSwic3ViIjoidGVhY2hlckBleGFtcGxlLmNvbSIsImlhdCI6MTczOTUyOTU0MywiZXhwIjoxNzQwMTM0MzQzfQ.mhzJW-bR0c7zEbX0AbwSOekqAWzF6XbiAi07yMzFIZY'
    });

    return this.http.get<any>(
      `${this.baseUrl}class?userId=${userId}`,
      { headers }
    );
  }
}
