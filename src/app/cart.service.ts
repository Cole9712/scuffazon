import { Injectable } from '@angular/core';
import { Product } from './product'
import { ProductsService } from './products.service'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  // products: CartItem[] = [];
  products: CartItem[] = [
    new CartItem(new Product('drake Lil Yachty', 100.0, '', 'drakeLilYachtyTemplate.png', 'Template'), 5),
    new CartItem(new Product('Average Fan Vs Average Enjoyer', 100.0, '', 'AverageFanVsAverageEnjoyer.jpg', 'Template'), 2),
  ];
  constructor(private ps: ProductsService) { }

  add(id: string, quantity: number){
    let tmp = this.getCartItemById(id);
    if ( tmp == null) {
      this.products.push(new CartItem(this.ps.getProductById(id), quantity));
    } else {
      tmp.quantity += quantity;
    }
    
  }
  delete(id: string) {
    this.products = this.products.filter(function(obj) {
      return obj.product.id != parseInt(id);
    })
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