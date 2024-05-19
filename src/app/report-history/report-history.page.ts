import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-report-history',
  templateUrl: './report-history.page.html',
  styleUrls: ['./report-history.page.scss'],
})
export class ReportHistoryPage implements OnInit {

  history: any = [];

  constructor(private storage: Storage, private toastController: ToastController,     private alertController: AlertController,
    ) {
     // Init Ionic storage
     this.storage.create();
   }


   ngOnInit() {
    // retrieve saved items
    this.storage.get('history').then((history: any[]) => {
      this.history = history || [];
      this.history.reverse();
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
   async clearReportsHistory() {
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
            this.storage.remove('history').then(() => {
              this.history = [];
              this.presentToast('middle');
            })
          },
        },
      ],
    });

    await alert.present();
  }

}