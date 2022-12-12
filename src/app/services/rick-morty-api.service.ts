import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {

  apiUrl: string = '';
  constructor(private http: HttpClient) {
    this.apiUrl = "https://rickandmortyapi.com/api/";
  }

  getCharactersList() {
    return this.http.get(`${this.apiUrl}character`);
  }
}
