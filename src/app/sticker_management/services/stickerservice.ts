import { Injectable } from "@angular/core";
import { Sticker } from "../models/sticker";

@Injectable()
export class StickerService {
    private key: number = 0;
    private collection_name: string = 'StickerList';

    constructor() {
        let collection: Sticker[] = [];
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }

    get(id: number): Sticker {
        return JSON.parse(localStorage.getItem(this.collection_name))[id];
    }

    getAll(): Sticker[] {
        return JSON.parse(localStorage.getItem(this.collection_name));
    }

    create(sticker: Sticker): number {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        sticker.id = this.key++;
        collection.push(sticker);
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
        return sticker.id;
    }

    update(sticker: Sticker) {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        collection[sticker.id] = sticker;
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }

    delete(id: number): void {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        collection.splice(collection.findIndex(item => item.Id === id), 1);
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }
}