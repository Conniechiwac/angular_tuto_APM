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

@NgModule({
  // here are the things that we need to import from inside the project
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  // here are the things that we need to import from outside the project
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    /* ensure that the routes are available to the application
     * => by passing the RouterModule and bu calling forRoot method
     * and passing our array of routes to that method
     * if we want to use the #-style for routing the routes,
     * => we use right after the array [] ', { useHash: true}' insde the ()
     */
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // usually use to redirect to the 404 page
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
