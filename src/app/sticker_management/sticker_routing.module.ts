import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StickerListComponent } from './components/sticker_list/sticker_list.component';
import { StickerCreateComponent } from './components/sticker_create/sticker_create.component';
import { StickerEditComponent } from './components/sticker_edit/sticker_edit.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { StickerResolveService } from './services/sticker_resolve.service';

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
        resolve: { todo: StickerResolveService }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StickerRoutingModule { }