import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { convertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  // here are the things that we need to import from inside the project
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacesPipe 
  ],
  // here are the things that we need to import from outside the project
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
