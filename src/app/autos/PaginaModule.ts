import { NgModule } from "@angular/core";


import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { VehiculosComponent } from "./vehiculos/vehiculos.component";
import { RouterModule } from "@angular/router";
import { PreferidosComponent } from "./preferidos/preferidos.component";




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule,


    ],
    declarations: [
        VehiculosComponent,
        PreferidosComponent

    ],
    exports: [
        VehiculosComponent,
        PreferidosComponent
        ]
})

export class PaginaModule{

}
