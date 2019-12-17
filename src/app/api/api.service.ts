import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Config } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  config: Config;
  
  constructor(private http: HttpClient) {
   }


  getStudentData()
  {
    console.log(this.config)
    return this.http.get("https://postman-echo.com/get?foo1=bar1&foo2=bar2")
  }


}
