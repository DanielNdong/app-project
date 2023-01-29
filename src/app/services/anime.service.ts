import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnime } from '../models/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private readonly URL_API = "https://kitsu.io/api/edge"
  /* public apiGamesOne: string = 'https://rickandmortyapi.com/api/character';
  public apiCharacterAliveFiltered: string = 'https://rickandmortyapi.com/api/character/?name=rick&status=alive';
  public apiCharacterDeathFiltered: string = 'https://rickandmortyapi.com/api/character/?name=rick&status=dead';
  public apiGamesTwo: string = 'https://api.rawg.io/api/games'; */

  constructor(
    private httpClient: HttpClient
  ) { }

  public getFilteredManga(): Observable<{data: IAnime[]}>{
    return this.httpClient.get<{data: IAnime[]}>(this.URL_API + '/manga')
  }

  public getFilteredAnime(): Observable<{data: IAnime[]}>{
    return this.httpClient.get<{data: IAnime[]}>(this.URL_API + '/anime')
  }
}
