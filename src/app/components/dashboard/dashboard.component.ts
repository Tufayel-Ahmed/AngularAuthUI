import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CITY } from 'src/app/models/Initializers/City-Option';
import { ETHNICGROUP } from 'src/app/models/Initializers/EthnicGroup-Option';
import { EXPERIENCE } from 'src/app/models/Initializers/Experience-Option';
import { RELIGION } from 'src/app/models/Initializers/Religion-Option';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  public ethnicGroups = ETHNICGROUP;
  public religions = RELIGION;
  public cities = CITY;
  public experiences = EXPERIENCE;

  registrationForm!: FormGroup;

  constructor(public fb: FormBuilder){}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      ethnicGroup: [''],
      religion: [''],
      city: [''],
      experience: ['']
    })
  }
}
