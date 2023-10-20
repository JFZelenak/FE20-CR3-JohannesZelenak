import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: IDishes[] = [];

  constructor(private CS: CartService) {}

  ngOnInit(): void {
    this.items = this.CS.getItems();  
  }
}
