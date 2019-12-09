import { HouseService } from './../house.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import {House} from '../models/house.model';
import { from } from 'rxjs';
import {HouseList} from '../models/house-list.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
dataHouseArray: House [] = [];
dataList: HouseList[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private houseService: HouseService,
  ) { }

  ngOnInit() {
    this.houseService.getHouseData().subscribe(res => {
      this.dataHouseArray = res;
      this.dataHouseList();
    });

  }

  dataHouseList() {
    this.dataList = this.dataHouseArray.map(x => ({
      name: x.name,
      students: x.members.length
    }));
  }

  goToList = (nameHouse: string) => this.router.navigate([nameHouse], {relativeTo: this.route});
}
