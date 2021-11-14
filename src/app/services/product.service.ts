import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs'
import { ProductsResponse } from '../ResponseTypes/ProductsResponse';

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

  products:ProductsResponse

  getProducts(): Observable<ProductsResponse>{
    return this.http.get<ProductsResponse>(this.apiUrl);
  }

}
