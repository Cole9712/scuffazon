import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { CartItemComponent } from './cart-page/cart-item/cart-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemPageComponent,
    CartPageComponent,
    HomePageComponent,
    ItemCardComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
