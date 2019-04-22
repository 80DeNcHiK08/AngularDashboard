import { NgModule } from "@angular/core";
import { CustomNgIfDirective } from "./directives/custom-if.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CustomNgIfDirective
    ],
    exports: [
        CustomNgIfDirective
    ]
})
export class CoreModule { }