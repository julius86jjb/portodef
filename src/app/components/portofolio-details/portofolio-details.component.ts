import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Proyecto } from 'src/app/interfaces/proyectos.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portofolio-details',
  templateUrl: './portofolio-details.component.html',
  styleUrls: ['./portofolio-details.component.css']
})
export class PortofolioDetailsComponent implements OnInit {

    proyecto: Proyecto;
    id: string;

    constructor( public _infoService: InfoService,
                    private router: Router,
                    private activated_route: ActivatedRoute) {
                        this.activated_route.params
                        .subscribe( parametros => {
                            console.log(parametros);
                            this.id = parametros['id'];
                            console.log(this.id);

                            this._infoService.getProyecto( this.id )
                                .subscribe( (proyecto: any) => {
                                    console.log(this.proyecto);
                                    return this.proyecto =  proyecto;
                                });
                        });
    }

    ngOnInit() {

    }

}
