import { Component } from '@angular/core';

@Component({
  selector: 'app-footerbottom',
  templateUrl: './footerbottom.component.html',
  styleUrl: './footerbottom.component.scss'
})
export class FooterbottomComponent {
  year: Date;
  currentyear: number = 0;

  constructor() {
    this.year = new Date();
    this.currentyear = this.year.getFullYear()
  }

}
