import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Options, ChangeContext } from '@angular-slider/ngx-slider';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('rangeSlider') rangeSlider: ElementRef | undefined;

  minValue: number = 20;
  maxValue: number = 80;
  sliderOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    animate: false,
    draggableRange: true
  };

  constructor(public httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit() {

  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    if (typeof changeContext.value === 'number' && typeof changeContext.highValue === 'number') {
      this.minValue = changeContext.value;
      this.maxValue = changeContext.highValue;
    } else {
      console.error('Slider values were not numbers:', changeContext);
      // Handle the error case (e.g., set default values, display an error message)
      if (typeof changeContext.value !== 'number') {
        this.minValue = 0;
      }
      if (typeof changeContext.highValue !== 'number') {
        this.maxValue = 100;
      }
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Your ngx-slider initialization here
    }
  }
}
