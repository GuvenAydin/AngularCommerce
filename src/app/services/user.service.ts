import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':'application/json;',
  }),
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7038/v1/Products';

  constructor(private http:HttpClient) { }


  
}
