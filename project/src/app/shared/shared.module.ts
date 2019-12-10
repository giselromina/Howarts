import { TranslateBooleansPipe } from './pipes/traslate-booleans.pipe';
import { from } from 'rxjs';
import { NgModule, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table-house-student/table.component';
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
import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { LockDialogComponent } from './components/lock-dialog/lock-dialog.component';
@NgModule({
  declarations: [
    TableComponent,
    ListLayoutComponent,
    FormLayoutComponent,
    ImagePickerComponent,
    TranslateBooleansPipe,
    DeleteDialogComponent,
    LockDialogComponent
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
    ImagePickerComponent
  ]
})
export class SharedModule { }
