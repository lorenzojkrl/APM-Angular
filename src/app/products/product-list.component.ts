import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-products', rm selector after adding routing to component in app.component.ts
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
  errorMessage: string;

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
  // 1 Angular init the component and executes the ngOnInit method
  // Call getProduct() method of ProductService
  // 2 The method returns an observable of IProduct array (product.service.ts)
  // 3 We subscribe() to that observable
  // 4 The http.get request is submitted
  // 5 Since this is an async operation, it executes the next line
  // which set filterProducts but products property isn't yet set
  // 6 when http gets data (product.service.ts) it maps it to array products
  // and the observale emits that mapped data to any subscriber
  // 7 subscriber receive products data and using next assigns it
  //  to the emitted arrays of products
  // products is now binded this.products
  ngOnInit(): void {
    this.ProductService.getProducts().subscribe({
      // when observable emits the data
      // we set our property to the returned array of products
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products; // set filteredP to initial list
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
