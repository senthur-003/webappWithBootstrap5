import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  @HostBinding('class.dark-mode') darkMode = false;

}
