import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(private route:Router,private apiSer:ApiService){

  }
  ngOnInit(){

  }

  login(){
    let url = environment.APIURL+'user';
    this.apiSer.get(url).subscribe((data:any)=>{
      
    });
    this.route.navigate(['master/dashboard'])
  }

}
