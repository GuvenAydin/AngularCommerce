import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/Entities/Product';

@Component({
  selector: 'app-home-trending-products',
  templateUrl: './home-trending-products.component.html',
  styleUrls: ['./home-trending-products.component.css']
})
export class HomeTrendingProductsComponent implements OnInit {
  products: Products;
  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {this.products = products});
  }

}
