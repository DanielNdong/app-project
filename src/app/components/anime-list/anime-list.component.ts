import { Component, OnInit } from '@angular/core';
import { IAnime } from 'src/app/models/anime.interface';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})

export class AnimeListComponent implements OnInit {
  
  
  public animeList!: IAnime[];
  public showMangas: boolean = true;


  constructor(
    private animeService: AnimeService,
  ) { }

  ngOnInit(): void {
    this.getAnimeList()
  }

  //All animes
  public getAnimeList():void{
    this.animeService.getFilteredAnime().subscribe({
      next: (resp) => {
        this.animeList = resp.data;
        this.showMangas = true;
      }, error: (err) => {
        throw Error('Error find: ' + err )
      }
    })
  }

  //All mangas
  public getMangaList():void{
    this.animeService.getFilteredManga().subscribe({
      next: (resp) => {
        this.animeList = resp.data;
        this.showMangas = false;
      }, error: (err) => {
        throw Error('Error find: ' + err)
      }
    })
  }

  //clicked card
  public clickedCard(animeName:IAnime){
    alert(`Has clickado en ${animeName.attributes.canonicalTitle}`)
  }

    
  }
  