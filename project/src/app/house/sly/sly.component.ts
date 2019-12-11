import { Component, OnInit } from '@angular/core';
import { TableLayout } from './../../shared/models/TableLayout.model';
import { HouseService } from '../house.service';
import { DataTableStudent } from '../../shared/models/table-house-student.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-sly',
  templateUrl: './sly.component.html',
  styleUrls: ['./sly.component.css']
})
export class SlyComponent implements OnInit {
  filter: FormControl = new FormControl();
  dataFilter: DataTableStudent[];
  search;

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
    this.filter.valueChanges.pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((search) => {
        this.dataFilter = this.houseService.updateFilter(search, this.dataArray);
        this.callDataTable(this.dataFilter);
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
