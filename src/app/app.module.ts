import { ProductDetailGuard } from './products/product-detail.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// this module registers the router service, declares the router directives, exposes configured routes
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  // here are the things that we need to import from inside the project
  declarations: [
    AppComponent,
    //ProductListComponent,
    //ConvertToSpacesPipe,
    //StarComponent,
    //ProductDetailComponent,
    WelcomeComponent
  ],
  // here are the things that we need to import from outside the project
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    /* ensure that the routes are available to the application
     * => by passing the RouterModule and bu calling forRoot method
     * and passing our array of routes to that method
     * if we want to use the #-style for routing the routes,
     * => we use right after the array [] ', { useHash: true}' insde the ()
     */
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      /* we can pass any number of parameters to a route separated by slashes.
       * by specifying a slash, a colon, and the name of the parameter
       * pass the parrameter value by adding it to an element of the link parameters array bound to the [routerLink] directive (check it in product-list.component.html) in the <a></a>
       * read the parameter value in the product-detail.component.ts in the navigated component using the ActivatedRoute service
       * notice here that the parameter name, id here, is exactly the same as in the route definition.
       * * To activate a route with code:
       * => use therouter service (be sure to import the service & define it as a dependency on the constuctor)
       * => Create a method that calls the navigate method of the router service instance and pass in the link paramaters array
       * => add a user interface element (use event binding to call the created method)
       */
      { path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // usually use to redirect to the 404 page
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    // created with the command: ng g m products/product --flat -m app
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
