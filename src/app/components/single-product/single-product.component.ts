import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductResponse } from 'src/app/ResponseTypes/ProductResponse';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product: ProductResponse;


  constructor(private route: ActivatedRoute, private productService: ProductService) {


    const id: Observable<string> = route.params.pipe(map(p => p.id));

      this.productService.getProductById(id).subscribe((product) => { this.product = product });

    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));

    // const user = route.data.pipe(map(d => d.user));

    // this.route.queryParams.subscribe(params => {
    //   let id = params['id'];


    // });
  }

  ngOnInit(): void {

    // var id = this.route.snapshot.paramMap.get('id');


  }

}
