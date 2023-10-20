import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: IDishes[] = dishes;

  constructor(private CS: CartService){}

  addToCart(id : number){
    Swal.fire(dishes[id].name + " added to cart.");
    this.CS.addToCart(this.dishes[id]);
  }

  ngOnInit(): void {}
}
