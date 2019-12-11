import { Component, OnInit, ElementRef, ViewChildren, Output, Input, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControlName,
  FormBuilder
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../../student/models/student.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  @Input() router: Router;
  @Input() student: Student;
  @Input() routeBack: Router;
  formInputElements: ElementRef[];
  studentsDataForm: FormGroup;

  get role() {
    return this.studentsDataForm.get('role');
  }
  get house() {
    return this.studentsDataForm.get('house');
  }
  get school() {
    return this.studentsDataForm.get('school');
  }
  get ministryOfMagic() {
    return this.studentsDataForm.get('ministryOfMagic');
  }
  get dumbledoresArmy() {
    return this.dumbledoresArmy.get('dumbledoresArmy');
  }
  get orderOfThePhoenix() {
    return this.studentsDataForm.get('orderOfThePhoenix');
  }
  get deathEater() {
    return this.studentsDataForm.get('dumbledoresArmy');
  }
  get bloodStatus() {
    return this.studentsDataForm.get('dumbledoresArmy');
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.studentsDataForm = this.modelCreate();

    this.setValues();
  }
  modelCreate() {
    return this.fb.group({
      role: ['', false],
      house: [''],
      school: [''],
      ministryOfMagic: [''],
      orderOfThePhoenix: [''],
      dumbledoresArmy: [''],
      deathEater: [''],
      bloodStatus: ['']
    });
  }
  setValues() {
    this.role.value(this.student.role);
    this.house.value(this.student.house);
    this.school.value(this.student.school);
    this.ministryOfMagic.value(this.student.ministryOfMagic);
    this.orderOfThePhoenix.value(this.student.orderOfThePhoenix);
    this.dumbledoresArmy.value(this.student.dumbledoresArmy);
    this.deathEater.value(this.student.deathEater);
    this.bloodStatus.value(this.student.bloodStatus);
  }
  goBack = () => this.router.navigate([this.routeBack]);
}
