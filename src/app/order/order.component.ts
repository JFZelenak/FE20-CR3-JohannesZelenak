import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items: IDishes[] = [];
  total: number = 0;
  service: number = 0;
  sum: number = 0;
  discount: number = 0;

  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });

  constructor(private CS: CartService, private fb: FormBuilder) {}

  onSubmit() {
    alert('Your order has been submitted.');
    this.items = this.CS.clearCart();
    this.checkoutForm.reset();
  }

  clearCart() {
    alert('Your cart has been cleared.');
    this.items = this.CS.clearCart();
  }

  ngOnInit(): void {
    this.items = this.CS.getItems();
    this.total = this.CS.calcTotal();
    this.service = this.CS.calcService();
    this.sum = this.CS.calcSum();
    this.discount = this.CS.calcDiscount();
  }
}
