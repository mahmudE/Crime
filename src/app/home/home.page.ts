import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError } from 'rxjs/operators'; // Import catchError
import { of } from 'rxjs'; // Import of for error handling

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public newsUpdate: any;

  constructor(
    public dataService: DataService,
    private alertController: AlertController,
    private http: HttpClient // Inject HttpClient
  ) { }

  ngOnInit() {
    this.dataService.getNews().subscribe(
      (response) => {
        this.newsUpdate = response[response.length - 1];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  async checkLocationPermission() {
    const { location } = await Geolocation.checkPermissions();
    return location === 'granted';
  }

  async requestLocationPermission() {
    try {
      const { location } = await Geolocation.requestPermissions();
      console.log('Location permission status:', location); // Log permission status
      return location === 'granted';
    } catch (error) {
      console.error('Error requesting location permission:', error);
      return false;
    }
  }

  async sendSOS() {
    const permissionGranted = await this.checkLocationPermission();
    
    if (!permissionGranted) {
      const permissionRequested = await this.requestLocationPermission();
      if (!permissionRequested) {
        const alert = await this.alertController.create({
          header: 'Permission Denied',
          message: 'Location permission is required to send a distress message. Please enable it in your device settings.',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }
    }

    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const latitude = coordinates.coords.latitude;
      const longitude = coordinates.coords.longitude;

      const distressMessage = {
        message: 'Help! I need assistance.',
        latitude: latitude,
        longitude: longitude
      };

      // Send distress message to the backend
      this.http.post('https://your-render-app-url.com/api/distress', distressMessage)
        .pipe(
          catchError(error => {
            console.error('Error sending distress message:', error);
            this.alertController.create({
              header: 'Error',
              message: 'Unable to send distress message. Please try again later.',
              buttons: ['OK']
            }).then(alert => alert.present());
            return of(null); // Handle error gracefully
          })
        )
        .subscribe(async response => {
          if (response) {
            const alert = await this.alertController.create({
              header: 'SOS Sent',
              message: `Distress message sent! Location: ${latitude}, ${longitude}`,
              buttons: ['OK']
            });
            await alert.present();
          }
        });
    } catch (error) {
      console.error('Error getting location:', error);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Unable to retrieve location. Please check your settings.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
