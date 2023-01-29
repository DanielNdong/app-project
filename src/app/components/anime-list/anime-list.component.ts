import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAnime } from 'src/app/models/anime.interface';
import { ICharacter } from 'src/app/models/characters.interface';
import { IGame } from 'src/app/models/game.interface';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})

export class AnimeListComponent implements OnInit {
  
  
  public animeFormData!: FormGroup;
  public animeList!: IAnime[];


  
  constructor(
    private animeService: AnimeService,
    private animeForm: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAnimeList()
  }

  //All animes
  public getAnimeList():void{
    this.animeService.getFilteredAnime().subscribe({
      next: (resp) => {
        this.animeList = resp.data;
        console.log(resp.data)
      }, error: (err) => {
        throw Error('Error find: ' + err)
      }
    })
  }

  //All mangas
  public getMangaList():void{
    this.animeService.getFilteredManga().subscribe({
      next: (resp) => {
        this.animeList = resp.data;
        console.log(resp.data)
      }, error: (err) => {
        throw Error('Error find: ' + err)
      }
    })
  }


  getFilteredManga() {
    throw new Error('Method not implemented.');
    }

    
  }
  