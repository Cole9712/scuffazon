import { Injectable } from '@angular/core';
import { Product } from './product'
import { ProductsService } from './products.service'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: CartItem[] = [];
  constructor(private ps: ProductsService) { }
  add(id: string, quantity: number){
    this.products.push(new CartItem(this.ps.getProductById(id), quantity));
  }
  delete(id: string) {
    this.products = this.products.filter(function(obj) {
      return obj.product.id != parseInt(id);
    })
  }
}

class CartItem {
  product: Product;
  quantity: number;
  constructor(product: Product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
}