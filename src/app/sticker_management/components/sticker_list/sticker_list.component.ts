import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Sticker } from "../../models/sticker";
import { StickerService } from "../../services/stickerservice";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styles: [`
        .test-class { background-color: #ff9e9e; }
    `]
})

export class StickerListComponent implements OnInit {
    private list: Sticker[];
    private today: Date = new Date();

    constructor(private router: Router, private stickerService: StickerService) 
    {   }

    ngOnInit() {
        this.list = this.stickerService.getAll();
    }

    edit(id: number) {
        this.router.navigate([`/sticker/${id}`]);
    }

    add() {
        this.router.navigate([`/sticker/new`]);
    }

    delete(id: number) {
        this.stickerService.delete(id);
        this.list.splice(this.list.findIndex(item => item.id === id), 1);
    }
}