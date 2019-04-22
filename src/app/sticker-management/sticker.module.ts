import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StickerRoutingModule } from './sticker-routing.module';
import { CoreModule } from '../core/core.module';
import { StickerListComponent } from './components/sticker-list/sticker-list.component';
import { StickerCreateComponent } from './components/sticker-create/sticker-create.component';
import { StickerEditComponent } from './components/sticker-edit/sticker-edit.component';
import { StickerFormComponent } from './components/sticker-form/sticker-form.component';

import { AuthGuard } from '../core/guards/auth.guard';
import { StickerResolveService } from './services/sticker-resolve.service';
import { StickerService } from './services/sticker.service';

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
