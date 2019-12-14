import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',

  },
  {
    path: 'house',
    loadChildren: './house/house.module#HouseModule'
  },
  {
    path: 'student',
    loadChildren: './student/student.module#StudentModule'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
