import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { dishes } from '../dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: IDishes[] = dishes;

  constructor(){}

  ngOnInit(): void {}
}
