import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataServiceService } from './services/data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  data:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dService: DataServiceService
  ) {
    this.initializeApp();
    // this.data = {
    //   labels: ['A','B','C'],
    //   datasets: [
    //       {
    //           data: [55, 50, 100],
    //           backgroundColor: [
    //               "#FF6384",
    //               "#36A2EB",
    //               "#FFCE56"
    //           ],
    //           hoverBackgroundColor: [
    //               "#FF6384",
    //               "#36A2EB",
    //               "#FFCE56"
    //           ]
    //       }]    
    //   };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
