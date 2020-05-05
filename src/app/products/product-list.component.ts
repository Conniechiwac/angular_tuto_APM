// to import the interface that we use in the class ProductListComponent
import { IProduct } from './product';

// every component has to have this import below as { component }
import { Component, OnInit } from '@angular/core';
// width what is it composed of (how angular can identify it to read in wich html template)
@Component ({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'product list';

    // the type 'number' is for all integer type
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;

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

    message: string;
    filteredProducts: IProduct [];

    // this class is a function that is played when the compenent is first initialized
    constructor() {
      this.filteredProducts = this.products;
      // to set the default value to 'cart'
      this.listFilter = 'cart';
    }


    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
    }


    // when the array has no type we use any [] = [...] has a type.
    // but when we've got one type we can use an interface to report it, here 'IProduct'.
    products: IProduct [] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2019",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          },
          {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2019",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/saw.png"
          },
          {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2018",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "assets/images/xbox-controller.png"
          }
    ];

    // methods------------------------------------------

    // TODO: à revoir
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

    ngOnInit(): void {
      console.log('coucou in onInit');
    }

}
