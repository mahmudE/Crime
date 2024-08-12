import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadSavedPageRoutingModule } from './read-saved-routing.module';

import { ReadSavedPage } from './read-saved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadSavedPageRoutingModule
  ],
  declarations: [ReadSavedPage]
})
export class ReadSavedPageModule {}
