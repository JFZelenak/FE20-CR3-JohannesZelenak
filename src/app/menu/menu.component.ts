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
    Swal.fire({
      icon: 'success',
      title: dishes[id].name,
      text: 'added to your cart.'
    });
    this.CS.addToCart(this.dishes[id]);
  }

  notAvailable(id : number) {
    Swal.fire({
      icon: 'error',
      title: dishes[id].name,
      text: 'is not available at the moment.'
    });
  }

  ngOnInit(): void {}
}
