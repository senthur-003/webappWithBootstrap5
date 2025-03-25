import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'responsive';
  URL: string = "https://localhost:44351";
  endPoint: string = "/api/product";
  token: string = "xhwYlklasdweriTUOIUkljf";
  list: any;
  products: any;
  error: string = "";
  constructor(private http: HttpClient) {

  }
  getData(): Observable<any> {
    // var headerToken = { 'Authorization': `Bearer ` + this.token };
    // this.http.get<any>(this.URL + this.endPoint).subscribe((data: any) => {
    //   this.list = data;
    // })
    // this.http.get<any>(`${this.URL + this.endPoint}/getdata`, {observe:'response' }).subscribe({
    //   next: (data) => {
    //     console.log('API Response:', data);
    //     // Process your data
    //   },
    //   error: (error) => {
    //     console.error('API Error:', error);
    //     // Handle the error
    //   }
    // });
    return this.http.get<any>(`${this.URL + this.endPoint}`, { observe: 'response', responseType: 'json' });
  }
  ngOnInit() {

    this.getData().subscribe({
      next: (data) => {
        // console.log('Data received:', data); 
        this.products = data;
      },
      error: (err) => {
        // console.error('Error fetching data:', err);
        this.error = 'Failed to load products.';
      }
    });
  }

}


