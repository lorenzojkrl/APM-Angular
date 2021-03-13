import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
  // created using ng cli: ng g c products/product-detail --flat
  // selector: 'pm-product-detail', only required if component is nested, but we'll display component view as part of routing
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor() {}

  ngOnInit(): void {}
}
