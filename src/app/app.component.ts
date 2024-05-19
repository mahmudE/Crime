import { Component } from '@angular/core';

import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.platform.ready().then(()=> {
      StatusBar.setBackgroundColor({color: '#14520c'});
    });
  
}
}
