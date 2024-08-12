import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadSavedPage } from './read-saved.page';

const routes: Routes = [
  {
    path: '',
    component: ReadSavedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadSavedPageRoutingModule {}
