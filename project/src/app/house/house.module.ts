import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HouseRoutingModule} from './house-routing.module';
import {HouseListComponent} from './house-list/house-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule, MatExpansionModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [HouseListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    HouseRoutingModule,
    MatCardModule
  ]
})
export class HouseModule { }
