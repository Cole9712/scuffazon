import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component
( {
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
} )

export class HomePageComponent 
{	
	productList;

	constructor(private ps: ProductsService) { }

	ngOnInit() {
		this.productList = this.ps.allProducts;
	}
}
