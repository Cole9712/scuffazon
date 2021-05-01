import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Product[] = [
    new Product('drake Lil Yachty', 100, '', 'drakeLilYachtyTemplate.png', 'Template'),
    new Product('Average Fan Vs Average Enjoyer', 100, '', 'AverageFanVsAverageEnjoyer.jpg', 'Template'),
  ];
  
  constructor() { }

  getProductById(id: string) {
    return this.allProducts.find(e => (e.id === parseInt(id)));
  }
}
