import { Component, HostBinding } from '@angular/core';
import { AdminWebServiceService } from './admin-web-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  @HostBinding('class.dark-mode') darkMode = false;
  menuList: any;
  constructor(private adminSer:AdminWebServiceService){

  }
  ngOnInit(){
    this.adminSer.getAdminMenu().subscribe((data:any)=>{
     this.menuList = data.result;
      
    })
  }
}
