import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { Observable } from 'rxjs';
import { Environment } from '../environment/env';

const baseUrl = Environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl.concat('/getUsers'));
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl.concat('/addUser'), data);
  }
}
