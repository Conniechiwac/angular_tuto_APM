
/* To create a service:
 * Service class=>  need a clear name with Service at the end + export keyword
 * Service decorator: need 'Injectabe' + prefix @ and suffix () + import what we need (interface of the component)
 * To registering a Service :
 * Select the appropriate level in the hierarchy
 * => provideIn: 'root' => into @Injectable() if the service is used throughout the application
 * => providers: [ProductService] => into the @component concerned
 * ------------------------------------
 * Specify the service as a dependency
 * Use a constructor parameter
 * Service is injected when component is instantiated (ngOnInit) */

import { IProduct } from './product';
import { Injectable } from '@angular/core';

/* http Checklist: Service
 * => Define a dependency for the http client service (use constructor parameter)
 * => Create a method for each http request
 * => Call the desired http method, such as get (and pass in the Url)
 * => Use generics to specify the return type
 */

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable (
  // if we want to use the service into all the app
  // if not => set "providers: [ProductService]" into the @component
  // provideIn: 'root';
)
export class ProductService {
  // identify the location of the web server
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  // 02 - the productService returns an observable of IProduct array
  // 04 and then the http GET request is submitted
  // tihs is the asynchrinous operation
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    //in a real world app, we may send the server to some remote logging infrastucture
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Aclient-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      //the backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
