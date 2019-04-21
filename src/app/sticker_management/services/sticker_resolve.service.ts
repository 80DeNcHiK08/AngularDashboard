import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Sticker } from "../models/sticker";
import { StickerService } from "./stickerservice";


@Injectable()
export class StickerResolveService implements Resolve<Sticker> {

  constructor(private todoService: StickerService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return route.params['stickerId'] ? this.todoService.get(route.params['stickerId']) : new Sticker();
  }
}