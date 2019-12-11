import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Studentervice} from '../student.service';
@Component({
  selector: 'app-gryffindor-student',
  templateUrl: './gryffindor-student.component.html',
  styleUrls: ['./gryffindor-student.component.css']
})
export class GryffindorStudentComponent implements OnInit {
studentData
  constructor(
    private _route: ActivatedRoute,
    private studentService: Studentervice
  ) { }

  ngOnInit() {

this.studentService.getCharacter(this._route.snapshot.params.id).subscribe((res: any) => {
  this.studentData = res;
});

}



}
