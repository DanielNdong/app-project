import { Component, OnInit } from '@angular/core';
interface IPersona {
  name: string;
  subject: string;
  age?: number;
}
@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})

export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
