import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _info: InfoService ) { }

  ngOnInit() {
  }

}
