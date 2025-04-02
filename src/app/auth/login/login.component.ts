import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environment/environment';
import { AuthWebServiceService } from '../auth-web-service.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email:string='';
  password:String='';

  constructor(private route: Router, private authSer: AuthWebServiceService, private userService: UserService) {

  }
  ngOnInit() {

  }

  login() {
    const data1 = { email: this.email, password:this.password }

    this.authSer.login(data1).subscribe((data: any) => {
      this.userService.setUser(data.User);
      if (data.User.USERTYPE == "APP_ADMIN") {
        this.route.navigate(['admin/dashboard']);
      }
      else {
        this.route.navigate(['master/dashboard']);
      }
    }, (error) => {
      console.log(error)
    }
    );
  }

}
