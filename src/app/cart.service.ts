import { Injectable } from '@angular/core';
import { Product } from './product'
import { ProductsService } from './products.service'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  // products: CartItem[] = [];
  products: CartItem[] = [];
  constructor(private ps: ProductsService) { }

  init(){
    this.products = JSON.parse(localStorage.getItem('cart'));
    if (!this.products) {
      this.products = [];
    }
  }

  add(id: string, quantity: number){
    let tmp = this.getCartItemById(id);
    if ( tmp == null) {
      this.products.push(new CartItem(this.ps.getProductById(id), quantity));
      localStorage.setItem('cart', JSON.stringify(this.products));
    } else {
      tmp.quantity += quantity;
      localStorage.setItem('cart', JSON.stringify(this.products));
    }
    
  }
  delete(id: string) {
    this.products = this.products.filter(function(obj) {
      return obj.product.id != parseInt(id);
    })
    localStorage.setItem('cart', JSON.stringify(this.products));
  }
  subtotal() {
    var subtotal = 0.0;
    for (var i = 0; i < this.products.length; i++) {
      subtotal += this.products[i].quantity * this.products[i].product.price;
    }
    return subtotal.toFixed(2);
  }
  getCartItemById(id: string) {
    return this.products.find(e => (e.product.id === parseInt(id)));
  }
}

export class CartItem {
  product: Product;
  quantity: number;
  constructor(product: Product, quantity:number) {
    this.product = product;
    this.quantity = quantity;
  }
}