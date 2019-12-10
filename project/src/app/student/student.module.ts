import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRouteModule } from './student-route.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatGridListModule, MatExpansionModule, MatCardModule, MatSidenavModule,
  MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatProgressBarModule
} from '@angular/material';
import { CardComponent } from '../shared/components/card/card.component';
import { GryffindorStudentComponent } from './gryffindor-student/gryffindor-student.component';
import { SlytherinStudentComponent } from './slytherin-student/slytherin-student.component';
import { HufflepuffStudentComponent } from './hufflepuff-student/hufflepuff-student.component';
import { RavenclawStudentComponent } from './ravenclaw-student/ravenclaw-student.component';


@NgModule({
  declarations: [StudentRouteModule, GryffindorStudentComponent,
   SlytherinStudentComponent, HufflepuffStudentComponent, RavenclawStudentComponent],
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
    MatProgressBarModule,
    CardComponent

  ]
})
export class StudentModule { }
