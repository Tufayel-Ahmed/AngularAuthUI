import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7061/api/User/";

  constructor(private http : HttpClient) { }

  signup(signupObj: any){
    return this.http.post<any>(this.baseUrl+'register', signupObj);
  }

  login(loginObj: any){
    return this.http.post<any>(this.baseUrl+'register', loginObj);
  }

}
