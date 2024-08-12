import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsReadingPageRoutingModule } from './news-reading-routing.module';

import { NewsReadingPage } from './news-reading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsReadingPageRoutingModule
  ],
  declarations: [NewsReadingPage]
})
export class NewsReadingPageModule {}
