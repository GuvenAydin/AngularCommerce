import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/Entities/Product';
import { Response } from 'src/app/Entities/Response';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;

  constructor() { }

  ngOnInit(): void {}

  getDiscountedPercent() {
    
    if(this.product.discountedPrice){

      var discount = this.product.regularPrice - this.product.discountedPrice;

      var percent = (discount / this.product.regularPrice) * 100 ;

      return percent.toFixed(1);
    }
   
    return 0;
  }  

}
