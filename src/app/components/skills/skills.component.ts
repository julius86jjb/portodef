import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
