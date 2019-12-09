import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { DataTableStudent } from '../../shared/models/table-house-student.model';
@Component({
  selector: 'app-grifi',
  templateUrl: './grifi.component.html',
  styleUrls: ['./grifi.component.css']
})
export class GrifiComponent implements OnInit {
  dataArray: DataTableStudent[] = [];
  dataTable: DataTableStudent[] = [];

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.houseService.getMembersHouse().subscribe(res => {
      this.dataArray = res;
      this.filterDataArray();
    });
  }
  filterDataArray() {
    // tslint:disable-next-line: no-unused-expression
    this.dataTable = this.dataArray.filter( function (el: DataTableStudent) {
      return el.house === 'Gryffindor'; } );
  }

}
