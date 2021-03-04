import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // Typescript can actually infer the type when a default value is set
  pageTitle: string = 'Products';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  // listFilter: string = 'cart';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  // Class constructor is executed when component is initialized
  // When instance of product-list component is create,
  // Angular injector injects the instance of the product service
  constructor(private ProductService: ProductService) {}

  // Pass events from child to parent container
  // onRatingClicked is expected from template & passing message with event
  // do something with event
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    // filter method creates new array with elements that pass the test

    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  // Convention methods after property definition
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // ngOnInit handles any additional initialization tasks.
  // E.g. retrieve data on initialization, but outside constructor 
  ngOnInit(): void {
    this.products = this.ProductService.getProducts();
    this.filteredProducts = this.products; // set filteredP to initial list
  }
}
