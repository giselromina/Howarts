import { DataTableStudent } from './../../shared/models/table-house-student.model';
import { FormControl } from '@angular/forms';
import { TableLayout } from './../../shared/models/TableLayout.model';
import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-huf',
  templateUrl: './huf.component.html',
  styleUrls: ['./huf.component.css']
})
export class HufComponent implements OnInit {
headerRows = ['name', 'bloodStatus', 'orderOfThePhoenix'];
  tableData: TableLayout;
  dataArray: DataTableStudent[] = [];
  dataFilter: DataTableStudent[];
  filter: FormControl = new FormControl();
  constructor(private houseService: HouseService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.houseService.getMembersHouse().subscribe(res => {
      this.dataArray = res;
      this.dataArray = this.dataArray.filter((el: DataTableStudent) => {
        return el.house === 'Hufflepuff';
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
      title: 'Members Of Hufflepuff',
      canEdit: true,
      canRemove: false,
      data,
      functionRemove: this.onDelete,
      headerRows: this.headerRows
    };
  }
  onDelete = (data) => { this.tableData.data = data; };

}
