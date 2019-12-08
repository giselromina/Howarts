import { HouseService } from './../house.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import {House} from '../models/house.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

arrayHouseName: string [] = [];
housesArray: House [] = [];
  constructor(
    private houseService: HouseService,
  ) { }

  ngOnInit() {
      this.houseService.getHouseData().subscribe(res => {
      this.housesArray = res;
      this.createArrayHouseName();

    });

  }

createArrayHouseName() {
  for (const h of this.housesArray) {
  this.arrayHouseName.push(h.name);
}
}
}
