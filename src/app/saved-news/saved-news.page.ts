import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ItemUpdateService } from '../services/item-update.service';

@Component({
  selector: 'app-saved-news',
  templateUrl: './saved-news.page.html',
  styleUrls: ['./saved-news.page.scss'],
})
export class SavedNewsPage implements OnInit {

  savedNews: any = [];

  constructor(private storage: Storage, private toastController: ToastController,     private alertController: AlertController, private itemUpdateService: ItemUpdateService
    ) {
     // Init Ionic storage
     this.storage.create();
   }

 
   
   ngOnInit() {
    // retrieve saved news
    this.storage.get('savedNews').then((savedNews: any[]) => {
      this.savedNews = savedNews || [];
      this.savedNews.reverse();
    });

    this.itemUpdateService.itemRemoved$.subscribe((itemId) => {
      this.savedNews = this.savedNews.filter((item: { id: number }) => item.id !== itemId);
    });
  }


  // PRESENT TOAST
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Cleared Successfully.',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }


   // CLEAR STORAGE
   async clearSavedNews() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Clear all saved items?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => {
            this.storage.remove('savedNews').then(() => {
              this.savedNews = [];
              this.presentToast('middle');
            })
          },
        },
      ],
    });

    await alert.present();
  }

}