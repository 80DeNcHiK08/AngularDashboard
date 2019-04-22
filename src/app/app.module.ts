import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StickersComponent } from './sticker-management/sticker-list/stickers-list.component';
import { StickerInfoComponent } from './sticker-management/sticker-info/sticker-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StickerSearchComponent } from './sticker-management/sticker-search/sticker-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StickersComponent,
    StickerInfoComponent,
    DashboardComponent,
    StickerSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
