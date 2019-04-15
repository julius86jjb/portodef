import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';
import { Proyecto } from 'src/app/interfaces/proyectos.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnChanges {
    proyectos: Proyecto[] = [];
    loading: boolean;
    @Input() filterBy ? = 'all';

    constructor(private route: ActivatedRoute, public _infoService: InfoService) {
        this.loading = true;
        setTimeout(() => {
            this.getProyectos();
        }, 500);
    }

    ngOnInit() {
        this.route.fragment.subscribe((fragment: string) => {
            if (fragment && document.getElementById(fragment) != null) {
            document.getElementById(fragment).scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    ngOnChanges() {
        this.getProyectos();
    }

    getProyectos() {
        this._infoService.cargarProyectos()
            .subscribe( (data: Proyecto[]) => {
                console.log(data);
                this.proyectos = data;
                this.loading = false;
            });
    }





}
