import {Injectable} from '@angular/core';
import {Respuesta, Vehiculo} from '../utilitarios/modelos/Vehiculo';
import {Observable, map, observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) {

  }

  baseUrl: string = "http://127.0.0.1:8000/api/v1/vehiculo/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  insertVehiculo(n1: string, n2: number) {
    return this.http.put<Respuesta>(this.baseUrl + "preferencias/" + n1 + '/' + n2, this.httpOptions)
  }

  getVehiculos(filtro?: string, rows?: number, page?: number): Observable<Respuesta> {
    let body = new HttpParams();
    body = filtro ? body.set("filtro", filtro) : body;
    body = rows ? body.set("rows", rows) : body;
    body = page ? body.set("page", page) : body;
    return this.http.get<Respuesta>(this.baseUrl + "listar/", {params: body});

  }

  getVehiculosPrefer(filtro?: string, rows?: number, page?: number): Observable<Respuesta> {
    let body = new HttpParams();
    body = filtro ? body.set("filtro", filtro) : body;
    body = rows ? body.set("rows", rows) : body;
    body = page ? body.set("page", page) : body;
    return this.http.get<Respuesta>(this.baseUrl + "listar/preferencias/", {params: body});

  }

}
