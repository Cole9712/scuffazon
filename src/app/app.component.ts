import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'scuffazon';
  constructor(private cs: CartService){}

  ngOnInit() {
    this.cs.init();
  }
}
