import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtService {

  // Get token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Decode JWT payload safely
  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('Invalid token:', e);
      return null;
    }
  }

  // Extract role from token
  getRole(): string | null {
    const token = this.getToken();
    console.log("token",token);
    
    if (!token) return null;

    const decoded = this.decodeToken(token);
    return decoded?.ROLES[0] || null;
  }

  // Optional: Get username/email from token
  getEmail(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const decoded = this.decodeToken(token);
    return decoded?.sub || null;
  }
}
