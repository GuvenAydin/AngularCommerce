import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/Entities/Product';

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

      return percent.toFixed(0);
    }
   
    return 0;
  }  

}
