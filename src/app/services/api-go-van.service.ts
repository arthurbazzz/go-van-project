import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class ApiGoVanService {

  private apiGoVanUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiGoVanUrl}/user`);
  }
}
