import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-read-saved',
  templateUrl: './read-saved.page.html',
  styleUrls: ['./read-saved.page.scss'],
})
export class ReadSavedPage implements OnInit {

  currentNewsId: any;
  currentNews: any;

  constructor(private storage: Storage, private toastController: ToastController,     private alertController: AlertController, private route: ActivatedRoute, private dataService: DataService
    ) {
     // Init Ionic storage
     this.storage.create();
   }

   ngOnInit() {
    // get from savedNews
    this.route.paramMap.subscribe(params => {
      this.currentNewsId = params.get('id');
      this.storage.get('savedNews').then((currentNews: any[]) => {
        this.currentNews = currentNews.find(currentNews => currentNews.id === this.currentNewsId);
      });
    });
  }



   // unsave item from storage
   async unsave(item: any) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: `Unsave ${this.currentNews.title}?`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Yes',
          handler: () => {
            this.dataService.removeItemFromStorage(this.currentNews.id);
            this.presentToast('middle');
          }
        }
      ]
    });
    await alert.present();
  }

  // PRESENT TOAST
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: `${this,this.currentNews.title} Unsaved Successfully.`,
      duration: 2500,
      position: position,
    });

    await toast.present();
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
