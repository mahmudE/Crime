import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.page.html',
  styleUrls: ['./all-news.page.scss'],
})
export class AllNewsPage implements OnInit, OnDestroy {

  allNews: any[] = [];
  private loadingIndicator: HTMLIonLoadingElement | null = null;
  private dataSubscription: Subscription | null = null;
  errorMsg: boolean = false;

  constructor(
    public dataService: DataService,
    private loadingCtrl: LoadingController,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.showLoadingIndicator();
    this.dataSubscription = this.dataService.getNews().subscribe(
      (response) => {
        this.allNews = response.reverse();
        this.hideLoadingIndicator();
      },
      (error) => {
        this.hideLoadingIndicator();
        this.errorMsg = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  async showLoadingIndicator() {
    this.loadingIndicator = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await this.loadingIndicator.present();
  }

  async hideLoadingIndicator() {
    if (this.loadingIndicator) {
      await this.loadingIndicator.dismiss();
    }
  }

  goBack() {
    this.navController.back();
  }

}
