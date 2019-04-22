import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Sticker } from "../../models/sticker.model";
import { StickerService } from "../../services/sticker.service";

@Component({
    selector: 'app-sticker-create',
    templateUrl: './sticker-create.component.html'
})
export class StickerCreateComponent implements OnInit {
    private sticker: Sticker;

    constructor(private router: Router, private stickerService: StickerService) {}

    ngOnInit() {
        this.sticker = new Sticker();
    }

    save() {
        this.stickerService.add(this.sticker);
        this.router.navigate([`/sticker`]);
    }
}