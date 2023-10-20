import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IDishes[] = [];
  total : number = 0;
  service : number = 0;

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
    this.items.forEach((val) => {
      this.total += val.price;
    })
    return this.total;
  }

  calcService(){
    this.service = this.total * 0.1;
    return this.service;
  }

  calcSum(){
    let sum : number = 0;
    let discount : number = 0;

    if(sum >= 40) {
      discount = 15;
    }

    sum = (this.total + this.service) * ((100 - discount)/100);
    // 
    console.log(this.total);
    console.log(this.service);
    console.log(sum);
    return sum;
  }
}
