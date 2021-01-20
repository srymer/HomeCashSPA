import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDTO } from 'src/app/_models/userDTO';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<UserDTO>(1);
  currentUser$ = this.currentUserSource.asObservable();
  currentUser = localStorage.getItem('user');

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: UserDTO) => {
        var user = response;  
      this.setCurrentUser(user);
      }))
  }


  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: UserDTO) => {
     this.setCurrentUser(user);
        
      }))
  }

  setCurrentUser(user: UserDTO) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
