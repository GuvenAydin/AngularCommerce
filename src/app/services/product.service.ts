import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Product } from '../Entities/Product';
import { Response } from '../Entities/Response';

const httpOptions = {
  headers: new HttpHeaders({
      // 'Content-Type':'application/json',
      'Content-Type':'application/json;',
  }),
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = 'https://localhost:7038/v1/Products';
  
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Response>{
    return this.http.get<Response>(this.apiUrl);;
  }

}
