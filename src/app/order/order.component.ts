import { Component } from '@angular/core';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  items: IDishes[] = [];
  total: number = 0;
  service: number = 0;
  sum: number = 0;
  discount: number = 0;

  constructor(private CS: CartService) {}

  ngOnInit(): void {
    this.items = this.CS.getItems();
    this.total = this.CS.calcTotal();
    this.service = this.CS.calcService();
    this.sum = this.CS.calcSum();
    this.discount = this.CS.calcDiscount();
  }
}
