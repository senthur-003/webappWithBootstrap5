import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthWebServiceService {
  url = environment.APIURL;

  constructor(private apiSer: ApiService) { }

  getUser() {
    return this.apiSer.get(this.url + 'users/CCuserlist');
  }

  login(data:any){
    return this.apiSer.post(this.url+'users/CCLogin',data);
  }

}
