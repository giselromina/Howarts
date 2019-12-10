import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseRoutingModule } from './house-routing.module';
import { HouseListComponent } from './house-list/house-list.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatGridListModule, MatExpansionModule, MatCardModule, MatSidenavModule,
  MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatProgressBarModule
} from '@angular/material';
import { CardHouseComponent } from './card-house/card-house.component';
import { MatListModule } from '@angular/material/list';
import { GrifiComponent } from './grifi/grifi.component';
import { RavenComponent } from './raven/raven.component';
import { SlyComponent } from './sly/sly.component';
import { HufComponent } from './huf/huf.component';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [HouseListComponent,
    CardHouseComponent,
    GrifiComponent,
    RavenComponent,
    SlyComponent,
    HufComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    HouseRoutingModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule
  ]
})
export class HouseModule { }
