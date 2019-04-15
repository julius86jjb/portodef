import { Component } from '@angular/core';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio2';

    constructor( public _info: InfoService ) {

    }
}
