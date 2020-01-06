import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { dataset } from './data'
import { HttpClientModule } from '@angular/common/http';
import { Config } from 'protractor';
import { ConfigService } from './config/config.service';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nudge-crew';
  dataset: any[];
  view: any[] = [700,400]

   // options
   gradient: boolean = true;
   showLegend: boolean = true;
   showLabels: boolean = true;
   isDoughnut: boolean = false;
   legendPosition: string = 'below';
   config: Config;
 
   colorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };

   
 
   constructor(private apiService: ApiService) {
     Object.assign(this, { dataset });
      this.apiService.getStudentData().subscribe(result => {
        console.log(result);
      })


   }
 
   onSelect(data): void {
     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
   }
 
   onActivate(data): void {
     console.log('Activate', JSON.parse(JSON.stringify(data)));
   }
 
   onDeactivate(data): void {
     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
   }

}

