import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Product[] = [];
  
  constructor() { }

  getProductById(id: string) {
    return this.allProducts.find(e => (e.))
  }
}
