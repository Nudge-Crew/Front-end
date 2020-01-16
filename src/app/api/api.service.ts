import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Config } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  config: Config;
  headerOptions = new HttpHeaders({
    "X-Canvas-Authorization": "Bearer " + localStorage.getItem('Canvas')
  });

  constructor(private http: HttpClient) {

  }


  getStudentData()
  {
    let options = {
      headers: this.headerOptions,
      params: {
        "endpoint": "/courses"
      }
    }
    return this.http.get("https://us-central1-nudge-crew.cloudfunctions.net/canvas_api", options);
  }
}
