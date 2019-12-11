import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {House} from 'src/app/house/models/house.model';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.css']
})
export class CardHouseComponent implements OnInit {

 @Input() house: House;
 namecontrol: FormControl = new FormControl();
 imgControl: FormControl = new FormControl();
 members: FormControl = new FormControl();

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.imgControl.setValue(this.house.img);
    this.namecontrol.setValue(this.house.name);
    this.members.setValue(this.house.members);
  }

imageUploaded = (image) => this.imgControl.setValue(image);
}
