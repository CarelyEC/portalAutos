import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./pipes/a-espacio.pipe";
import { CommonModule } from "@angular/common";




@NgModule({
    declarations:[
        AEspacioPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AEspacioPipe
    ]
})
export class UtilitariosModule{

}
