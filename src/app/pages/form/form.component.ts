import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup = new FormGroup({
    email1: new FormControl(),
    email2: new FormControl(),
    email3: new FormControl(),
    email4: new FormControl(),
  })
  constructor() { }

  ngOnInit(): void {
  }
}
