import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsReadingPage } from './news-reading.page';

const routes: Routes = [
  {
    path: '',
    component: NewsReadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsReadingPageRoutingModule {}
