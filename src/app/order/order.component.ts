import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  clickCounter: number = 0;

  info = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private CS: CartService) {}

  onSubmit() {
    
    if(this.clickCounter == 0) {
      this.clickCounter++;
    } else {
      if(this.info.valid) {
        alert('Your order has been submitted.');
        this.items = this.CS.clearCart();
        this.info.reset();
        this.loadSummary();
        this.clickCounter = 0;
      } else {
        alert('Info invalid! Try again.');
      }
    }
    
  }

  clearCart() {
    this.items = this.CS.clearCart();
    alert('Your cart has been cleared.');
    this.loadSummary();
  }

  loadSummary() {
    this.items = this.CS.getItems();
    this.total = this.CS.calcTotal();
    this.service = this.CS.calcService();
    this.sum = this.CS.calcSum();
    this.discount = this.CS.calcDiscount();
  }

  ngOnInit(): void {
    this.loadSummary();
  }
}
