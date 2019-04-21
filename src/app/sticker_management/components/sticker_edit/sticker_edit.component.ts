import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Sticker } from "../../models/sticker";
import { StickerService } from "../../services/stickerservice";

@Component({
    selector: 'app-todo-edit',
    templateUrl: './todo-edit.component.html'
})
export class StickerEditComponent implements OnInit {
    private sticker: Sticker;

    constructor(private router: Router, private route: ActivatedRoute, private stickerService: StickerService)
    {   }

    ngOnInit() {
        this.sticker = this.route.snapshot.data['sticker'];
    }

    save() {
        this.stickerService.update(this.sticker);
        this.router.navigate([`/sticker`]);
    }
}