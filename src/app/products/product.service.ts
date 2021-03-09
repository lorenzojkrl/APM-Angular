// Create ProductService class that will become a service once registered with injector
import { Injectable } from '@angular/core';

// Imports to use instance of http client services
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// Error handling
import { catchError, tap } from 'rxjs/operators';

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

  // 2 The method returns an observable of IProduct array
  getProducts(): Observable<IProduct[]> {
    // 4 call http get method, pass in the defined url variable
    // we expect response to be a json structure, containing an array of products
    // so we set the get method generic parameter to IProduct array
    // The method will automatically map the response to an array of products
    // return this.http.get<IProduct[]>(this.productUrl);

    // Adding exception handling
    // Add 2 observable operators
    // tap looks at the values in the stream, without transforming it, ok for logging/debugging
    // catchError catches errors
    // Pass operators into pipe method of the Observable
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Client side or network error occured
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // Backend returned unsuccesful response code
      errorMessage = `Server returned code: ${err.status}, message: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
