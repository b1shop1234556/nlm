import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) {}
  token = localStorage.getItem('token');
}
