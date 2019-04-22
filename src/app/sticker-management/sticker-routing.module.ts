import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StickerListComponent } from './components/sticker-list/sticker-list.component';
import { StickerCreateComponent } from './components/sticker-create/sticker-create.component';
import { StickerEditComponent } from './components/sticker-edit/sticker-edit.component';

import { AuthGuard } from '../core/guards/auth.guard';
import { StickerResolveService } from './services/sticker-resolve.service';

const routes: Routes = [
    {
        path: '',
        component: StickerListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'new',
        component: StickerCreateComponent
    },
    {
        path: ':stickerId',
        component: StickerEditComponent,
        resolve: { sticker: StickerResolveService }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickerRoutingModule { }