import { TableLayout } from './../../shared/models/TableLayout.model';
import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { DataTableStudent } from '../../shared/models/table-house-student.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-raven',
  templateUrl: './raven.component.html',
  styleUrls: ['./raven.component.css']
})
export class RavenComponent implements OnInit {


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
