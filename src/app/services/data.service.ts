import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { ItemUpdateService } from './item-update.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private news$ = 'http://localhost:5000/api/allnews';


  
  private news$ = 'https://newsapi-9opl.onrender.com/api/allnews';

  constructor(public http: HttpClient, public storage: Storage, public router: Router, private itemUpdateService: ItemUpdateService) { }

   // get DATA FOR news 
  getNews(): Observable<any> {
    return this.http.get<any>(this.news$);
  }
   // get DATA FOR current news
   getCurrentNews(itemId: any): Observable<any> {
    return this.http.get<any[]>(this.news$).pipe(
      map((items: any[]) => items.find((item: { id: any; }) => item.id === itemId))
    );
  }
  // REMOVE PARTICULAR ITEM FROM STORAGE
  removeItemFromStorage(itemId: number) {
    this.storage.get('savedNews').then((items: any[]) => {
      const updatedItems = items.filter(item => item.id !== itemId);
      this.storage.set('savedNews', updatedItems);
      // refresh list on saved-news page
      this.itemUpdateService.notifyItemRemoved(itemId);
      // navigate back to saved-news page
      this.router.navigate(['/saved-news']);
    });
  }


}
