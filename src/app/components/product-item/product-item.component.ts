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
  @Input() response:Response;

  constructor() { }

  ngOnInit(): void {}

}
