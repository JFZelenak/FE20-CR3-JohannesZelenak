import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dish: IDishes = {} as IDishes;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService){}

  addToCart() {
    Swal.fire(this.dish.name + " added to cart.");
    this.CS.addToCart(this.dish);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.dish = dishes[this.id];
    })
  }
}
