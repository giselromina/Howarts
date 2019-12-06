import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
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
//import { TranslateHeaderPipe } from './pipes/translate-header.pipe';
import { ListLayoutComponent } from './components/list-layout/list-layout.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
//import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { CardHouseComponent } from './components/card-house/card-house.component';
import { MatRippleModule } from '@angular/material/core';
import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { TranslateBooleansPipe } from './pipes/translate-booleans.pipe';
//import { LockDialogComponent } from './components/lock-dialog/lock-dialog.component';

@NgModule({
  declarations: [
    TableComponent,
  //  TranslateHeaderPipe,
    ListLayoutComponent,
    FormLayoutComponent,
   // DeleteDialogComponent,
    CardHouseComponent,
    ImagePickerComponent,
   // TranslateBooleansPipe,
   // LockDialogComponent
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
  entryComponents: [
  //  DeleteDialogComponent,
  //  LockDialogComponent
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
  //  TranslateHeaderPipe,
    ListLayoutComponent,
    FormLayoutComponent,
  //  DeleteDialogComponent,
    CardHouseComponent,
    MatRippleModule,
    ImagePickerComponent
  ]
})
export class SharedModule { }
