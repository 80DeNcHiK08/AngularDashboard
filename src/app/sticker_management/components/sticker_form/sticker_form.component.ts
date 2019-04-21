import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Sticker } from "../../models/sticker";
import { Router } from "@angular/router";

@Component({
    selector: 'app-sticker-form',
    templateUrl: './sticker_form.component.html'
})

export class StickerFormComponent {
    @Input() sticker: Sticker;
    @Output() submit: EventEmitter<Sticker> = new EventEmitter<Sticker>();

    constructor(private router: Router) 
    {   }

    onSubmit() {
        this.submit.emit(this.sticker);
    }

    onBack() {
        this.router.navigate([`/sticker`]);
    }
}