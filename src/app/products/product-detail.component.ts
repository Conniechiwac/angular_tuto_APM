import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Product Detail';
  Product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
