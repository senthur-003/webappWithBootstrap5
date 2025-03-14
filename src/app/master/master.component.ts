import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent implements OnInit {
  year: Date;
  currentyear:number=0;

constructor(){
  this.year= new Date();
  this.currentyear = this.year.getFullYear()
}
ngOnInit(){
  
}

  productSelect(val: string) {
    // this.utilSer.setMenuName(val.toUpperCase());
    // this.router.navigate(['../pages/productgrid']);
    // this.mobileMenu = false;
  }
}
