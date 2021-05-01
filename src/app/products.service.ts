import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Product[] = [
    new Product('drakeLilYachty')
  ];
  
  constructor() { }

  getProductById(id: string) {
    return this.allProducts.find(e => (e.id === parseInt(id)));
  }
}
