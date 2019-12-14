import { Component, OnInit, ElementRef, ViewChildren, Output, Input, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControlName,
  FormBuilder
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../../student/models/student.model';
import { JsonPipe } from '@angular/common';
import { stringify } from 'querystring';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() router: Router;
  @Input() student: Student;
  @Input() routeBack: Router;
  studentsDataForm: FormGroup;
  dataForm: FormGroup;
  //  get role() {
  //    return this.studentsDataForm.get('role');
  // }
  // get house() {
  //   return this.studentsDataForm.get('house');
  // }
  // get school() {
  //   return this.studentsDataForm.get('school');
  // }
  // get ministryOfMagic() {
  //   return this.studentsDataForm.get('ministryOfMagic');
  // }
  // get dumbledoresArmy() {
  //   return this.dumbledoresArmy.get('dumbledoresArmy');
  // }
  // get orderOfThePhoenix() {
  //   return this.studentsDataForm.get('orderOfThePhoenix');
  // }
  // get deathEater() {
  //   return this.studentsDataForm.get('dumbledoresArmy');
  // }
  // get bloodStatus() {
  //   return this.studentsDataForm.get('dumbledoresArmy');
  // }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  goBack = () => this.router.navigate([this.routeBack]);
}
