import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Product[] = [
    new Product('Drake Lil Yachty', 100, '', 'drakeLilYachtyTemplate.png', 'Template', false, 3012, 3),
    new Product('Average Fan Vs Average Enjoyer', 100, '', 'AverageFanVsAverageEnjoyer.jpg', 'Template', false, 1034, 2),
    new Product('Amazon At Home', 500, '', 'AmazonAtHome.png', 'Meme', true, 5021, 5),
	new Product('Hackathon Programmers Vs Speedrunners', 200, '', 'HackathonProgrammersVsSpeedrunners.png', 'Meme', true, 3152, 5),
	new Product('I Recieve You Receive', 100, '', 'iRecieveYouReceive.png', 'Template', false, 7120, 4),
	new Product('Nobody Is Born Cool Scuffed Hacks', 200, '', 'nobodyIsBornCoolScuffedHacks.jpg.png', 'Meme', true, 1242, 5),
	new Product('Programmming Is Hard', 1000, '', 'ProgrammmingIsHard.png', 'Meme', true, 9239, 5)
  ];
  
  constructor() { }

  getProductById(id: string) {
    return this.allProducts.find(e => (e.id === parseInt(id)));
  }
}
