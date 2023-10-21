import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { dishes } from '../dishes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  dishes: IDishes[] = dishes;

  ngOnInit(): void {
  }
}
