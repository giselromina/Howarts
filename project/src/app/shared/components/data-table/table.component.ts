
import { AfterViewInit, Component, ViewChild, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { TableLayout } from '../../models/TableLayout.model';
import { LockDialogComponent } from '../lock-dialog/lock-dialog.component';

export class GenericDataSource extends DataSource<any> {

  constructor(private paginator: MatPaginator, private sort: MatSort, private data: any[]) {
    super();
  }

  connect(): Observable<any[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];


    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }


  disconnect() { }


  private getPagedData(data: any[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: any[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {

      const isAsc = this.sort.direction === 'asc';
      return compare(a[this.sort.active], b[this.sort.active], isAsc);
      // switch (this.sort.active) {
      //   case 'name': return compare(a.name, b.name, isAsc);
      //   case 'id': return compare(+a.id, +b.id, isAsc);
      //   default: return 0;
      // }
    });
  }
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnChanges {

  constructor(
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  @Input() tableData: TableLayout;
  @Input() routeBack: Router;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: GenericDataSource;
  itemsLength = 0;
  columnsToDisplay: string[];

  ngAfterViewInit() {


    this.dataSource = new GenericDataSource(this.paginator, this.sort, this.tableData.data);
    this.itemsLength = this.tableData.data.length;
    this.cdRef.detectChanges();
  }

  ngOnChanges(changes) {
    if (changes.tableData.currentValue.headerRows) {
      this.columnsToDisplay =
        (this.tableData.canEdit || this.tableData.canRemove || this.tableData.canLock)
          ? [...this.tableData.headerRows, 'acciones']
          : this.tableData.headerRows;
    }
    if (changes.tableData && !changes.tableData.firstChange && changes.tableData.currentValue.data) {
      this.dataSource = new GenericDataSource(this.paginator, this.sort, changes.tableData.currentValue.data);
      this.itemsLength = changes.tableData.currentValue.data.length;
      this.cdRef.detectChanges();
    }
  }

  openDialog = (name: string, id: number) => {
    this.dialog.open(DeleteDialogComponent, {
      data: {
        title: this.tableData.title,
        name,
        id
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.tableData.functionRemove(id);
      }
    });
  }

  openLockDialog = (isLocking: boolean, name: string, id: number) => {
    this.dialog.open(LockDialogComponent, {
      data: {
        isLocking,
        name,
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.tableData.functionLock(id, isLocking);
      }
    });
  }

  goBack = () => this.router.navigate([this.routeBack]);
  navigateToEdit = (id) => this.router.navigate([id, 'edit'], { relativeTo: this.route });
}
