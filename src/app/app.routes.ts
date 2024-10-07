import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehiculosComponent} from './autos/vehiculos/vehiculos.component';
import {HomeComponent} from './autos/home/Home.component';
import {PageNotFoundComponent} from './autos/page-not-found/page-not-found.component';
import {PreferidosComponent} from './autos/preferidos/preferidos.component';


export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: VehiculosComponent
  },
  {
    path: "preferencias",
    component: PreferidosComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
