import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Sticker } from '../models/sticker';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class StickerService {
    private stickersUrl = 'api/stickers';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Sticker[]> {
        return this.http.get<Sticker[]>(this.stickersUrl);
    }

    get(id: number): Observable<Sticker> {
        const url = `${this.stickersUrl}/${id}`;
        return this.http.get<Sticker>(url);
    }

    update(sticker: Sticker): Observable<any> {
        sticker.lastModificationDate = new Date().toString();
        return this.http.put(this.stickersUrl, sticker, httpOptions);
    }

    add(sticker: Sticker): Observable<Sticker> {
        sticker.creationDate = new Date().toString();
        sticker.lastModificationDate = new Date().toString();
        return this.http.post<Sticker>(this.stickersUrl, sticker, httpOptions);
    }

    delete(sticker: Sticker | number): Observable<Sticker> {
        const id = typeof sticker === 'number' ? sticker : sticker.id;
        const url = `${this.stickersUrl}/${id}`;
        return this.http.delete<Sticker>(url, httpOptions);
    }

    search(term: string): Observable<Sticker[]> {
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Sticker[]>(`${this.stickersUrl}/?text=${term}`);
    }
}
