import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: IDishes[] = dishes;

  constructor(private CS: CartService){}

  addToCart(id : number){
    alert("item added");
    // console.log(this.dishes[id]);
    this.CS.addToCart(this.dishes[id]);
  }

  ngOnInit(): void {}
}
