import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sticker } from './sticker-management/models/sticker';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stickers = [
      {
        id: 1,
        Name: 'Welcome',
        Body: 'Add all your awesome ideas!',
        creationDate: new Date().toString(),
        lastModificationDate: new Date().toString()
      }
    ];

    return {stickers};
  }

  genId(stickers: Sticker[]): number {
    return stickers.length > 0 ? Math.max(...stickers.map(sticker => sticker.id)) + 1 : 1;
  }
}
