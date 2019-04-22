import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Sticker } from "../models/sticker.model";
import { StickerService } from "./sticker.service";

@Injectable()
export class StickerResolveService implements Resolve<Sticker> {

  constructor(private stickerService: StickerService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return route.params['stickerId'] ? this.stickerService.get(route.params['stickerId']) : new Sticker();
  }
}