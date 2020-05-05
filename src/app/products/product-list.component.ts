import { ProductService } from './product.service';

// to import the interface that we use in the class ProductListComponent
import { IProduct } from './product';

// every component has to have this import below as { component }
import { Component, OnInit } from '@angular/core';


// width what is it composed of (how angular can identify it to read in wich html template)
@Component ({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'product list';

    // the type 'number' is for all integer type
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    message: string;

    _listFilter: string;

    filteredProducts: IProduct [];

     // when the array has no type we use any [] = [...] has a type.
    // but when we've got one type we can use an interface to report it, here 'IProduct'
    // we get their data from  the service.
    products: IProduct [] = [];


    // getter & setter---------------------------------------------------------------------------------------------
    /* GET => defines read-only property
     * usefull to provide a property who the value can be calculated
     * or when we want to expose the value of internal variable sych as a property from a service
     * => it can not have any parameters
     * => and must have a return type
     * => and can be accessed as a property ex: console.log(this.fullName);
     */
    get listFilter(): string {
      return this._listFilter;
    }
    /* SET => defines write-only property
     * usefull if we want to execute code every time a property is modified
     * => it has to hve only 1 parameter: the value
     * => NO return type
     */
    set listFilter(value: string) {
      this._listFilter = value;
      // if there is a filter writted, perfom JS function to filter and show the products of this filter
      // : otherwise, if there is no value writted, then show all of the products
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }



    // constructor-----------------------------------------------------------------------------------------------------
    // this class is a function that is played when the compenent is first initialized
    /* we use the same constructor to call the component service (we type it and add : with the type with majuscule
      => wich is the same as the name of the service */
    constructor(private productService: ProductService) {

      // to set the default value to 'cart'
      this.listFilter = 'cart';
    }

    // methods--------------------------------------------------------------------------------------------------------------
    performFilter(filterBy: string): IProduct[] {
      // converting the filter by lowercase (because less sensible to break)
      filterBy = filterBy.toLocaleLowerCase();
                          // filter function to define on what is played of
      return this.products.filter( (product: IProduct) =>
          // create a new array => the product name is converted in lowerCase to compare with what we were looking for
                                                                  // if it's the case the result is added in the filtered list
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
    }

    // on loading => calling the data from the component service
    ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
    }

}
