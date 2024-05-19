import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'awareness',
    loadChildren: () => import('./awareness/awareness.module').then( m => m.AwarenessPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'report-history',
    loadChildren: () => import('./report-history/report-history.module').then( m => m.ReportHistoryPageModule)
  },
  {
    path: 'saved-news',
    loadChildren: () => import('./saved-news/saved-news.module').then( m => m.SavedNewsPageModule)
  },
  {
    path: 'all-news',
    loadChildren: () => import('./all-news/all-news.module').then( m => m.AllNewsPageModule)
  },
  {
    path: 'news-reading',
    loadChildren: () => import('./news-reading/news-reading.module').then( m => m.NewsReadingPageModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./news-reading/news-reading.module').then( m => m.NewsReadingPageModule)
  },
  {
    path: 'saved-details/:id',
    loadChildren: () => import('./read-saved/read-saved.module').then( m => m.ReadSavedPageModule)
  },
  {
    path: 'read-saved',
    loadChildren: () => import('./read-saved/read-saved.module').then( m => m.ReadSavedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
