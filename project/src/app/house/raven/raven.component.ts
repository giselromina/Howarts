import { TableLayout } from './../../shared/models/TableLayout.model';
import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { DataTableStudent } from '../../shared/models/table-house-student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-raven',
  templateUrl: './raven.component.html',
  styleUrls: ['./raven.component.css']
})
export class RavenComponent implements OnInit {
filter: FormControl = new FormControl();
  dataFilter: DataTableStudent[];
  search;

  headerRows = ['name', 'bloodStatus', 'orderOfThePhoenix'];
  tableData: TableLayout;
  dataArray: DataTableStudent[] = [];
  constructor(private houseService: HouseService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.houseService.getMembersHouse().subscribe(res => {
      this.dataArray = res;
      this.dataArray = this.dataArray.filter((el: DataTableStudent) => {
        return el.house === 'Ravenclaw';
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
      title: 'Members Of Ravenclaw',
      canEdit: true,
      canRemove: false,
      data,
      functionRemove: this.onDelete,
      headerRows: this.headerRows
    };
  }

  goBack = () => this.router.navigate(['house']);

  onDelete = (data) => { this.tableData.data = data; };
}
