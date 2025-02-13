import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  saveToken(token: any) {
    throw new Error('Method not implemented.');
  }
  getCookie(arg0: string): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  url = "http://localhost:8000/api/";
  token = localStorage.getItem('token');

  login(data: any): Observable<any> {
    return this.http.post(this.url + 'login', data);
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.url + 'logout', {}, { headers });
  }

  // login(data: any){
  //   return this.http.post(this.url + 'login', data);
  // }

  // logout(){
  //   const headers = {'Autorization': 'bearer' + this.token}
  //   return this.http.post(this.url + 'logout', {}, { headers });
  //   // const token = localStorage.getItem('token');
  //   // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   // return this.http.post(this.url + 'logout', {}, { headers });
  // }






}
