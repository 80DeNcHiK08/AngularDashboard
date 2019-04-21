import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickerRoutingModule } from './sticker_routing.module';
import { CoreModule } from '../core/core.module';
import { StickerListComponent } from './components/sticker_list/sticker_list.component';
import { StickerCreateComponent } from './components/sticker_create/sticker_create.component';
import { StickerEditComponent } from './components/sticker_edit/sticker_edit.component';
import { StickerFormComponent } from './components/sticker_form/sticker_form.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { StickerResolveService } from './services/sticker_resolve.service';
import { StickerService } from './services/stickerservice';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        StickerRoutingModule
    ],
    declarations: [
        StickerListComponent,
        StickerCreateComponent,
        StickerEditComponent,
        StickerFormComponent
    ],
    providers: [
        AuthGuard,
        StickerResolveService,
        StickerService
    ]
})
export class StickerModule { }