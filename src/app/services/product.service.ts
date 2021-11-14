import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Product, Products } from '../Entities/Product';
import { Response } from '../Entities/Response';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':'application/json;',
  }),
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'https://localhost:7038/v1/Products';
  
  constructor(private http:HttpClient) { }

  products:Products

  getProducts(): Observable<Products>{
    return this.http.get<Products>(this.apiUrl);
  }

}
