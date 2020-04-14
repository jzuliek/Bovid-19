import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  data:any;

  constructor(private dService: DataServiceService) {
    this.data = {
      labels: ['A','B','C','D'],
      datasets: [
          {
              label: 'first',
              data: [1, 66, 100, 133],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FFCE56",

              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FFCE56",
              ]
          }]    
      };
  }
ngOnInit(){
  this.dService.getInfo();
}
}
