import { Injectable } from "@angular/core";
import { Sticker } from "../models/sticker.model";

@Injectable()
export class StickerService {
    private key: number = 0;
    private collection_name: string = 'StickerList';

    constructor() {
        let collection: Sticker[] = [];
        collection.push({ Id: 0, Name: 'Welcome', Body: "Note all your awesome ideas!", CreationDate: new Date(), ChangeDate: null, IsComplete: false });
        this.key = 1;
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }

    get(id: number): Sticker {
        return JSON.parse(localStorage.getItem(this.collection_name))[id];
    }

    getAll(): Sticker[] {
        return JSON.parse(localStorage.getItem(this.collection_name));
    }
    
    add(sticker: Sticker): number {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        sticker.Id = this.key++;
        sticker.CreationDate = new Date();
        collection.push(sticker);
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
        return sticker.Id;
    }
    
    update(sticker: Sticker) {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        sticker.ChangeDate = new Date();
        collection[sticker.Id] = sticker;
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }
    
    delete(id: number): void {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        collection.splice(collection.findIndex(item => item.Id === id), 1);
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }
}