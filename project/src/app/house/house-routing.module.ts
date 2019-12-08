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
    path: '/grifi',
    component: GrifiComponent
  },
  {
    path: '/sly',
    component: SlyComponent
  },
  {
    path: '/raven',
    component: RavenComponent
  },
  {
    path: '/huf',
    component: HufComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
