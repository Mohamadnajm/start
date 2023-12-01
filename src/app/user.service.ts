import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;
  // addUser(newUser: any) {
  //   throw new Error('Method not implemented.');
  // }
  // getUsers() {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'https://demo.appbase.ma';

  constructor(private http: HttpClient) {}
  login(user: string, password: string): Observable<any> {
    const hardcodedUser = 'admin';
      const hardcodedPassword = 'admin';
      if(user === hardcodedUser && password === hardcodedPassword){
        
        let data = {
          params: {
            login: user,
            password: password,
            db: 'demo',
          }}
          return this.http.post(`${this.apiUrl}/auth`, data);
        }else{
          return new Observable(observer => {
            observer.error('Authentication failed');
          });
        }
        
  }
  // getData(){
  //   let url = "https://demo.appbase.ma/....";
  //   return this.http.get(url);
    
  // }
}
