import { Component, OnInit } from '@angular/core';
import { faBugSlash } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  faBugSlash = faBugSlash;
  faCircleQuestion = faCircleQuestion;
  constructor() { }

  ngOnInit(): void {
  }

}
