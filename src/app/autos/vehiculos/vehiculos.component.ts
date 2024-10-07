import {Component, Input, OnInit} from "@angular/core"
import {VehiculoService} from "../../servicios/Vehiculo.service";
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "vehiculos",
  templateUrl: "./vehiculos.component.html"
})
export class VehiculosComponent implements OnInit {

  tituloListaAutos = "LISTADO DE VEHÍCULOS";

  muestraImagen: boolean = false;
  anchoimagen = 100;
  margenImagen = 3;
  public rows: number = 10;
  public page: number = 1;
  public filtro: string = "";
  public pages: number = 0;

  //@Input() valor: string = ' ';
  arregloAutos: Array<any> = [];

  constructor(
    private vehiculoService: VehiculoService,
  ) {

  }

  ngOnInit() {
    this.consultaVehiculos();
  }

  toggleImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  consultaVehiculos() {
    this.vehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe(respuesta => {
      if (respuesta.codigo == "1") {
        this.arregloAutos = respuesta.data;
        this.pages = respuesta.pages;
        this.paginar(respuesta.pages)
      }
    });
  }

  siguiente() {
    if (this.page < this.pages) {
      this.page++;
      this.consultaVehiculos();
    }
  }

  anterior() {
    if (this.page > this.pages) {
      this.page++;
      this.consultaVehiculos();
    }
  }

  recepcion(dato: number) {
    console.log('Dato:', dato)
  }

  cambiarPagina(pagina: number) {
    this.page = pagina;
    this.consultaVehiculos();
  }

  listaPaginas: Array<number> = [];

  paginar(pages: number) {
    this.listaPaginas = [];
    for (let i = 1; i <= pages; i++) {
      this.listaPaginas.push(i);
    }
  }

  estadoVehiculos(n1 : string,n2 : number) {
    this.vehiculoService.insertVehiculo(n1,n2).subscribe(respuesta => {
      if (respuesta.codigo == "1") {
        this.consultaVehiculos();
      }
    });
  }


}
