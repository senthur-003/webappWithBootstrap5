import { Component, HostBinding, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-trail-code',
  templateUrl: './trail-code.component.html',
  styleUrl: './trail-code.component.scss'
})
export class TrailCodeComponent {
  @HostBinding('class.dark-mode') darkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : "light";
      if (savedTheme === 'dark') {
        this.darkMode = true;
      }
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }
}