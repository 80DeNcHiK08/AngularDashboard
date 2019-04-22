import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sticker } from '../models/sticker';
import { StickerService } from '../services/sticker.service';

@Component({
  selector: 'app-sticker-info',
  templateUrl: './sticker-info.component.html',
})
export class StickerInfoComponent implements OnInit {
  @Input() sticker: Sticker;

  constructor(private route: ActivatedRoute, private stickerService: StickerService, private location: Location) { }

  ngOnInit() {
    this.get();
  }

  get() {
    const id = +this.route.snapshot.paramMap.get('id');
    var res = this.stickerService.get(id).subscribe(sticker => this.sticker = sticker);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.stickerService.update(this.sticker)
      .subscribe(() => this.goBack());
  }
}
