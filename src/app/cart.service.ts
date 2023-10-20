import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IDishes[] = [];
  total : number = 0;
  service : number = 0;
  discountValue : number = 0;

  constructor() { }

  addToCart(dish: IDishes) {
    this.items.push(dish);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items=[];
    return this.items;
  }

  calcTotal(){
    this.total = 0;
    this.items.forEach((val) => {
      this.total += val.price;
    })
    return this.total;
  }

  calcService(){
    this.service = this.total * 0.1;
    return this.service;
  }

  calcDiscount(){
    let discount : number = 1;

    if(this.total >= 40) {
      discount = 0.15;
    } else {
      discount = 0;
    }

    this.discountValue = (this.total + this.service) * discount;
    return this.discountValue;
  }

  calcSum(){
    let sum : number = 0;
    this.calcDiscount();
    sum = (this.total + this.service) - this.discountValue;
    return sum;
  }
}
