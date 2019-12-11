import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HouseListComponent} from './house-list/house-list.component';
import { GrifiComponent } from './grifi/grifi.component';
import { SlyComponent } from './sly/sly.component';
import { RavenComponent } from './raven/raven.component';
import { HufComponent } from './huf/huf.component';
const routes: Routes = [
  {
    path: '',
    component: HouseListComponent
  },
  {
    path: 'Gryffindor',
    loadChildren: '../student/student.module#StudentModule',
    component: GrifiComponent,
    },
  {
    path: 'Ravenclaw',
    component: RavenComponent
  },
  {
    path: 'Slytherin',
    component: SlyComponent
  },
  {
    path: 'Hufflepuff',
    component: HufComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
