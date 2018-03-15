import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyGridComponent implements OnInit {
  public localData: any[];
  title = 'Grid';
  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }
}
