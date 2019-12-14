import { RavenclawStudentComponent } from './ravenclaw-student/ravenclaw-student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SlytherinStudentComponent } from './slytherin-student/slytherin-student.component';
import { HufflepuffStudentComponent } from './hufflepuff-student/hufflepuff-student.component';
import { GryffindorStudentComponent } from './gryffindor-student/gryffindor-student.component';



const routes: Routes = [

{
  path: '',
  component: GryffindorStudentComponent
},
{ path: ':id/hufflepuff-Stu',
  component: HufflepuffStudentComponent
},
{
  path: ':id/slytherin-Stu',
  component: SlytherinStudentComponent
},
{
  path: ':id/ravenclaw-Stu',
  component: RavenclawStudentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRouteModule { }
