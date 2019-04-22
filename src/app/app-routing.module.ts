import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StickersComponent } from './sticker-management/sticker-list/stickers-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StickerInfoComponent } from './sticker-management/sticker-info/sticker-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'info/:id', component: StickerInfoComponent },
  { path: 'stickers', component: StickersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
