import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sticker',
    pathMatch: 'full'
  },
  {
    path: 'sticker',
    loadChildren: './sticker-management/sticker.module#StickerModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];
