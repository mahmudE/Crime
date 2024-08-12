import { Component, OnInit } from '@angular/core';
import { EmailComposer, EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  currentDate: string | undefined;
  message: string = '';
  location: string = '';
  selectedFile: File | undefined;
  phone: number | undefined;

  constructor(public emailComposer: EmailComposer, private alertController: AlertController, private storage: Storage) {
    this.getCurrentDate();

    this.storage.create();
   }

  ngOnInit() {
  }


  getCurrentDate() {
    const currentDate = new Date();
    this.currentDate = currentDate.toISOString();
  }


  // handling selected file
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }



  // opening email with other logic...
  async openEmail() {
    if (!this.message || !this.location || !this.selectedFile) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please fill in all form fields. You may choose to attach a photo or video file.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
    const base64String = await this.selectedFileToBase64();
    if (!base64String) {
      console.error('Error converting file to base64.');
      return;
    }
    const fileType = this.getFileType();
    const email: EmailComposerOptions = {
      app: 'gmail',
      to: 'info@efcc.gov.ng',
      cc: 'interpolnigeria@npf.gov.ng',
      bcc: ['justice@justicegroup.org ', 'info@icpc.gov.ng', 'ncc@ncc.gov.ng'],
      // these email accounts should typically be of the security agencies...
      attachments: [`base64:attachment.${fileType}//${base64String}`],
      subject: `Cyber Crime Report`,
      body: `<bold>Location:</bold> ${this.location}<br><br><bold>Report:</bold> ${this.message}</b><br><br><bold>Phone:</bold> ${this.phone}`,
      isHtml: true,
    };

     // calling save item function too :)
     this.saveItem();

    await this.emailComposer.open(email);
  } // end opening email


// Handling selected file to base64
  private async selectedFileToBase64(): Promise<string | null> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]); // Get the base64 data part after the comma
      };
      reader.onerror = () => {
        resolve(null);
      };

      reader.readAsDataURL(this.selectedFile as Blob);
    });
  }


  // get file type to ensure it is permitted as attachment
  private getFileType(): string {
    const fileType = this.selectedFile?.type || '';
    return fileType.split('/')[1] || 'png'; // Return 'png' as the default type if not found
  }




    // Save item
    async saveItem(): Promise<void> {
      const base64String = await this.selectedFileToBase64();
      if (!base64String) {
        console.error('Error converting file to base64.');
        return;
      }
  
      const fileType = this.getFileType();
      const emailData = {
        subject: `Cyber Crime Report`,
        body: `Location: ${this.location}`,
        body2: `Report: ${this.message}`,
        date: this.currentDate,
        attachments: [`base64:attachment.${fileType}//${base64String}`]
      };
  
      // saved with key history
      this.storage.get('history').then((history: any[]) => {
        history = history || [];
        history.push(emailData);
        this.storage.set('history', history);
      });
    } // end save item

} // end class