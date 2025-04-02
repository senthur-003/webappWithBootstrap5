import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminWebServiceService {

  constructor(private apiSer: ApiService) {

  }

  getAdminMenu() {
    return this.apiSer.get(environment.APIURL + 'users/CCadminmenu');
  }

}
