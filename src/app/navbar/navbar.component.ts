import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor( private ps: ProductsService) { }

	ngOnInit(): void {
	}

	search( key: string  ): void
	{
		console.log( key );	
		this.ps.sendKeyword( key );
	}

}
