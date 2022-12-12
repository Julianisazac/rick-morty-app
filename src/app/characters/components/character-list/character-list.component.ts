import { Component } from '@angular/core';
import { RickMortyApiService } from 'src/app/services/rick-morty-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {

  characterList: [] = [];

  constructor(private charactesService: RickMortyApiService) {
    this.getCharactersList();
  }
  
  getCharactersList() {
    const response = this.charactesService.getCharactersList();
    response.subscribe((data: any) => {
      this.characterList = data.results;
      console.log();
      
    })
  }
}
