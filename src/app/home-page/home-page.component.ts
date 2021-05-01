import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component
( {
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
} )

export class HomePageComponent 
{
	ps: ProductsService = new ProductsService();

	constructor() { }
}
