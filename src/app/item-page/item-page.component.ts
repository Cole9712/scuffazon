import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private ps: ProductsService) { }
  productID;
  a = 'aloha';
  ngOnInit(): void {
    this.productID = this.ar.snapshot.paramMap.get('id');
    this.ps.getProductById(this.productID);
  }

}
