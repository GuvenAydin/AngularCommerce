import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs'
import { ProductsResponse } from '../ResponseTypes/ProductsResponse';
import { ProductResponse } from '../ResponseTypes/ProductResponse';
import { Product } from '../Entities/Product';

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

  id:string;
  getProductById(id:Observable<string>): Observable<ProductResponse>{

    id.subscribe((id) => { this.id = id });

    const url = `${this.apiUrl}/${this.id}`;

    return this.http.get<ProductResponse>(url);
  }

}
