import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService, CartItem } from '../cart.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(public cs: CartService, private route: Router) { }
  productList;
  ngOnInit(): void {
    this.productList = this.cs.products;
    console.log(this.productList);
  }

  onSelectChange(value, p) {
    this.cs.getCartItemById(p.product.id).quantity = value;
    this.route.navigateByUrl['/cart'];
  }

  onDelete(p) {
    this.cs.delete(p.product.id);
  }

}
