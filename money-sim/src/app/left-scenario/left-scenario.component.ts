import { Component, OnInit } from '@angular/core';
import { FunctionComponent } from '../function/function.component';

var funcs: FunctionComponent[] = [];

@Component({
  selector: 'app-left-scenario',
  templateUrl: './left-scenario.component.html',
  styleUrls: ['./left-scenario.component.css'],
})
export class LeftScenarioComponent implements OnInit {

  constructor() { }

  functions = funcs;

  ngOnInit(): void {
    this.functions.push(new FunctionComponent())
    this.functions.push(new FunctionComponent())
  }

}
