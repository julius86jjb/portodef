import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../interfaces/info.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

    info: Info = {};
    cargada = false;
    proyectos: any[] = [];

    constructor( private _http: HttpClient ) {
        this.cargarInfo();
        this.cargarProyectos();
    }

    private cargarInfo() {
        this._http.get('assets/data/info.json')
            .subscribe( (resp: Info) => {
                this.cargada = true;
                this.info = resp;
            });
    }

    cargarProyectos() {
        return this._http.get('https://portofolio-def.firebaseio.com/proyectos.json')
            .pipe(map( (res: any) =>  {
                this.proyectos = res;
                return res;
            }));
    }

    getProyecto( id: string) {


        const url = `https://portofolio-def.firebaseio.com/proyectos/${ id }.json`;

        return this._http.get(url)
            .pipe(map(res =>  res));
    }
}
