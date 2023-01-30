import { Component, Input, OnInit } from '@angular/core';
import { IAnime } from 'src/app/models/anime.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input('animeData') animeData!:IAnime;
  
  constructor() { }

  ngOnInit(): void {
  }

}
