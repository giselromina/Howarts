import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentRouteModule } from './student-route.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatGridListModule, MatExpansionModule, MatCardModule, MatSidenavModule,
  MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatProgressBarModule
} from '@angular/material';


@NgModule({
  declarations: [StudentCardComponent, StudentRouteModule],
  imports: [

    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule

  ]
})
export class StudentModule { }
