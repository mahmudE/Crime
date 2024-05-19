import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllNewsPageRoutingModule } from './all-news-routing.module';

import { AllNewsPage } from './all-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllNewsPageRoutingModule
  ],
  declarations: [AllNewsPage]
})
export class AllNewsPageModule {}
