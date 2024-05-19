import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
// import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public newsUpdate: any;
  

  constructor(public dataService: DataService) { }


  ngOnInit() {
    this.dataService.getNews().subscribe(
      (response) => {
        this.newsUpdate = response[response.length - 1];
        // from API the last on list is latest news
      },
      (error) => {
        console.error('Error fetching data:', error);       
      }
    );
  } 
  // END NGONINIT



}
