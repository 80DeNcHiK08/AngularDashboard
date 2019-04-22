import { Component, OnInit } from '@angular/core';

import { Sticker } from '../models/sticker';
import { StickerService } from '../services/sticker.service';

@Component({
  selector: 'app-stickers-list',
  templateUrl: './stickers-list.component.html',
})
export class StickersComponent implements OnInit {
  stickers: Sticker[];

  constructor(private stickerService: StickerService) { }

  ngOnInit() {
    this.getStickers();
  }

  getStickers() {
    this.stickerService.getAll().subscribe(stickers => this.stickers = stickers);
  }

  add(Name: string, Body: string) {
    Name = Name.trim();
    Body = Body.trim();
    if (!Body || !Name) { return; }
    this.stickerService.add({ Name, Body } as Sticker).subscribe(sticker => {
      this.stickers.push(sticker);
    });
  }

  delete(sticker: Sticker) {
    this.stickers = this.stickers.filter(s => s !== sticker);
    this.stickerService.delete(sticker).subscribe();
  }
}
