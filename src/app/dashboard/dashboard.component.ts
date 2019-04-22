import { Component, OnInit } from '@angular/core';
import { Sticker } from '../sticker-management/models/sticker';
import { StickerService } from '../sticker-management/services/sticker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  stickers: Sticker[];

  constructor(private stickerService: StickerService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.stickerService.getAll().subscribe(stickers => this.stickers = stickers);
  }
}
