import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartPageComponent} from './cart-page/cart-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ItemPageComponent} from './item-page/item-page.component';

const routes: Routes = 
[
	{ path: '', component: HomePageComponent },
	{ path: 'item', component: ItemPageComponent },
	{ path: 'item/:id', component: ItemPageComponent },
	{ path: 'cart', component: CartPageComponent },
];

@NgModule
( {
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
} )

export class AppRoutingModule { }
