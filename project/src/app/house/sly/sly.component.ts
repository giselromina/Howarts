import { Component, OnInit } from '@angular/core';
import { TableLayout } from './../../shared/models/TableLayout.model';
import { HouseService } from '../house.service';
import { DataTableStudent } from '../../shared/models/table-house-student.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sly',
  templateUrl: './sly.component.html',
  styleUrls: ['./sly.component.css']
})
export class SlyComponent implements OnInit {

headerRows = ['name', 'bloodStatus', 'orderOfThePhoenix'];
  tableData: TableLayout;
  dataArray: DataTableStudent[] = [];
  constructor(private houseService: HouseService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.houseService.getMembersHouse().subscribe(res => {
      this.dataArray = res;
      this.dataArray = this.dataArray.filter((el: DataTableStudent) => {
        return el.house === 'Slytherin';
      });
      this.callDataTable(this.dataArray);
    });
  }

  callDataTable(data) {
    this.tableData = {
      title: 'Members Of Slytherin',
      canEdit: true,
      canRemove: false,
      data,
      functionRemove: this.onDelete,
      headerRows: this.headerRows
    };
  }
  onDelete = (data) => { this.tableData.data = data; };


}
