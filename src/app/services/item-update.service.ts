import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemUpdateService {
  
  private itemRemovedSubject = new Subject<number>();
  itemRemoved$ = this.itemRemovedSubject.asObservable();

  notifyItemRemoved(itemId: number) {
    this.itemRemovedSubject.next(itemId);
  }
}
