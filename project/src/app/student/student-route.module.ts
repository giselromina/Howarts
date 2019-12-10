import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentCardComponent } from './student-card/student-card.component';


const routes: Routes = [
  {
    path: ':id/detail',
    component: StudentCardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentRouteModule { }
