import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService, CartItem } from '../cart.service'

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(public cs: CartService) { }
  productList;
  ngOnInit(): void {
    this.productList = this.cs.products;
    console.log(this.productList);
  }

}
