import { Component, OnInit, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {


  constructor() { }
/*input variable has to be declared after the constructor, otherwise it won't be accessible in html
(because app-pilot component is not constructed yest)*/
  @Input() pilot: Pilot;

  ngOnInit() {
  }

}
