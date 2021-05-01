import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Product[] = [
    new Product('Drake Lil Yachty', 100, '', 'drakeLilYachtyTemplate.png', 'Template', false),
    new Product('Average Fan Vs Average Enjoyer', 100, '', 'AverageFanVsAverageEnjoyer.jpg', 'Template', false),
    new Product('Amazon At Home', 500, '', 'AmazonAtHome.png', 'Meme', true),
	new Product('Hackathon Programmers Vs Speedrunners', 200, '', 'HackathonProgrammersVsSpeedrunners.png', 'Meme', true),
	new Product('I Recieve You Receive', 100, '', 'iRecieveYouReceive.png', 'Template', false),
	new Product('Nobody Is Born Cool Scuffed Hacks', 200, '', 'nobodyIsBornCoolScuffedHacks.jpg.png', 'Meme', true),
  ];
  
  constructor() { }

  getProductById(id: string) {
    return this.allProducts.find(e => (e.id === parseInt(id)));
  }
}
