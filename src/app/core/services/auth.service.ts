import { Injectable, signal } from '@angular/core';

function readInitialToken(): string | null {
  try {
    const t = localStorage.getItem('token');
    if (t) return t;
    const authnStr = localStorage.getItem('authnResult');
    if (authnStr) {
      const parsed = JSON.parse(authnStr);
      if (parsed?.access_token) return parsed.access_token as string;
    }
    const authz = localStorage.getItem('authzData');
    if (authz) return authz;
  } catch {}
  return null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _token = signal<string | null>(typeof localStorage !== 'undefined' ? readInitialToken() : null);
  token() { return this._token(); }
  isLoggedIn() { return !!this._token(); }

  login(email: string, _password: string) {
    // TODO: replace with real API call to obtain JWT
    const fake = 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFUyI6WyJURUFDSEVSIl0sInN1YiI6IlNJVEhNSV9XIiwiaWF0IjoxNzYxODA1MDE3LCJleHAiOjE3NjIxNjUwMTd9.dPqX4d8PfXCHK2M3BVuq1Rkx4OB_iQrXxfchAstDgzI2B15iEAkb9jgp_fnQlABz8dycvj3xCS1_F3m-yoSBvQ'; // replace with server token
    this.setToken(fake);
    return true;
  }

  setToken(token: string) {
    this._token.set(token);
    try { localStorage.setItem('token', token); } catch {}
  }

  logout() {
    this._token.set(null);
    try { localStorage.removeItem('token'); } catch {}
  }
}
