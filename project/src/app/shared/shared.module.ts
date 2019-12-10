import { TranslateBooleansPipe } from './pipes/traslate-booleans.pipe';
import { from } from 'rxjs';
import { NgModule, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/data-table/table.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSliderModule
} from '@angular/material';
import { ListLayoutComponent } from './components/list-layout/list-layout.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { LockDialogComponent } from './components/lock-dialog/lock-dialog.component';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    TableComponent,
    ListLayoutComponent,
    FormLayoutComponent,

    TranslateBooleansPipe,
    DeleteDialogComponent,
    LockDialogComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSliderModule,
    MatRippleModule,
    MatSelectModule
  ],
  exports: [
    TableComponent,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    ListLayoutComponent,
    FormLayoutComponent,
    MatRippleModule,

  ]
})
export class SharedModule { }
