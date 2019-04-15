import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
