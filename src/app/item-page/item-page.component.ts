import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private ps: ProductsService, private cs:CartService, private router : Router) { }
  
  productID;
  product;
  @ViewChild('qty') qty;

  ngOnInit(): void {
    this.productID = this.ar.snapshot.paramMap.get('id');
    this.product = this.ps.getProductById(this.productID);
  }

  addToCart(){
    console.log(this.qty);
    this.cs.add(this.productID, parseInt(this.qty.nativeElement.value));
    this.router.navigateByUrl["/cart"];
  }

}
