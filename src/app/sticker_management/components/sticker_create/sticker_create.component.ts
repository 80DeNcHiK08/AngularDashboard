import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Sticker } from "../../models/sticker";
import { StickerService } from "../../services/stickerservice";

@Component({
    selector: 'app-sticker-create',
    templateUrl: './sticker_create.component.html'
})
export class StickerCreateComponent implements OnInit {
    private sticker: Sticker;

    constructor(private router: Router, private stickerservice: StickerService) 
    {   }

    ngOnInit() {
        this.sticker = new Sticker();
    }

    save() {
        this.stickerservice.create(this.sticker);
        this.router.navigate([`/sticker`]);
    }
}