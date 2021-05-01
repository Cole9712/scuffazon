import { Component, Input } from '@angular/core';
import {Product} from '../product';

@Component
( {
	selector: 'app-item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.css']
} )

export class ItemCardComponent 
{
	@Input() product: Product;

	constructor() { }
}
