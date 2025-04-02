import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(url: any):Observable<any> {
    return this.httpClient.get(url)
  }
  post(url: any, data: any) {
    return this.httpClient.post(url, data);
  }
  patch(url: any, data: any) {
    return this.httpClient.patch(url, data);
  }
  delete(url: any, id: any) {
    return this.httpClient.delete(url, id);
  }
}
