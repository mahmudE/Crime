import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-news-reading',
  templateUrl: './news-reading.page.html',
  styleUrls: ['./news-reading.page.scss'],
})
export class NewsReadingPage implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public dataService: DataService,
    private storage: Storage,
    private alertController: AlertController) {
      this.storage.create();
     }

    currentNews: any;
    newsId: any;

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.newsId = params.get('id');
        this.fetchCurrentNews();
      });
    }
    
    fetchCurrentNews() {
      this.dataService.getCurrentNews(this.newsId).subscribe(
        (news: any) => {
          this.currentNews = news;
        },
        (error) => {
          console.error('Error fetching news details:', error);
        }
      );
    }

      // SAVE ITEM
  async saveNews(item: any): Promise<void> {
    this.storage.get('savedNews').then((savedNews: any[]) => {
      savedNews = savedNews || [];
      savedNews.push(item);
      this.storage.set('savedNews', savedNews);
    });
    const alert = await this.alertController.create({
      header: 'Saved',
      message: `${item.title} saved successfully`,
      buttons: ['OK']
    });
    await alert.present();
  }

  

    
  // share news
  async shareNews(item: any) {
    const shareOptions = {
      title: `${this.currentNews.title}`, 
      text: `${this.currentNews.body}`,
    };
  
    try {
      await Share.share(shareOptions);
      console.log('News shared successfully!');
      console.log(shareOptions)
    } catch (error) {
      console.error('Error sharing news:', error);
    }
  }
  


  }