// Create ProductService class that will become a service once registered with injector
import { Injectable } from '@angular/core';

// Imports to use instance of http client services
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProduct } from './product';

// Register class with root injector,
// Thus service available everywhere
// then inject in product-list
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // define location of json file so Angular CLI can find it
  // when it serves up the application
  // define it in angular.json under assets
  private productUrl = 'api/products/products.json';

  // To use http
  constructor(private http: HttpClient) {}

  // The method returns an observable of IProduct array
  getProducts(): Observable<IProduct[]> {
    // call http get method, pass in the defined url variable
    // we expect response to be a json structure, containing an array of products
    // so we set the get method generic parameter to IProduct array
    // The method will automatically map the response to an array of products
    return this.http.get<IProduct[]>(this.productUrl);
  }
}
