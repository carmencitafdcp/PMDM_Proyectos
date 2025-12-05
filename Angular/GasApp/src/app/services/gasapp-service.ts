import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EstacionMunicipio, EstacionesMunicipioResponse } from '../models/gasolineras-municipio-mal-response.interface';
import { EstacionMunicipioMap, mapEstacionMunicipio } from '../models/gasolineras-municipio-bien-response.interface';

import { Provincia, ProvinciaList } from '../models/provincias-list-response.interface';
import { Municipio, MunicipioList } from '../models/municipios-provincia-list-response.interface';

@Injectable({ providedIn: 'root' })
export class GasAppService {
  private base = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes';

  constructor(private http: HttpClient) {}

  getProvinciasList(): Observable<ProvinciaList> {
    return this.http.get<ProvinciaList>(`${this.base}/Listados/Provincias/`);
  }

  getMunicipiosPorProvincia(IDProvincia: string): Observable<MunicipioList> {
    return this.http.get<MunicipioList>(`${this.base}/Listados/MunicipiosPorProvincia/${IDProvincia}`);
  }

  getEstacionesMunicipio(IDMunicipio: string): Observable<EstacionMunicipioMap[]> {
    return this.http
      .get<EstacionesMunicipioResponse>(`${this.base}/EstacionesTerrestres/FiltroMunicipio/${IDMunicipio}`)
      .pipe(map(resp => resp.ListaEESSPrecio.map((e: EstacionMunicipio) => mapEstacionMunicipio(e))));
  }
}