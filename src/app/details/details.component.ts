import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dish: IDishes = {} as IDishes;
  id: number = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.dish = dishes[this.id];
    })
  }
}
