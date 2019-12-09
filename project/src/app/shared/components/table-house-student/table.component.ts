import { Component, OnInit, ElementRef, ViewChildren, Output, Input, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import {DataTableStudent} from '../../../shared/models/table-house-student.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() router: Router;
  @Input() dataList: DataTableStudent[];
  displayedColumns: string[] = ['name','bloodStatus'];
  dataSource = new MatTableDataSource(this.dataList);

constructor(
    private _route : Router
  ) {}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  goBack() {
    this._route.navigate([this.router]);
  }
}
