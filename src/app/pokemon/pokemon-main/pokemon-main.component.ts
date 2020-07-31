import { Component, OnInit } from '@angular/core';
import { IsListService } from '../is-list.service';
import { PokemonListService } from '../pokemon-list.service';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss']
})
export class PokemonMainComponent implements OnInit {

  constructor(public isListService: IsListService, private pokemonService: PokemonListService) { }
  pokemons: Pokemon[];
  searchText = '';

  getPokemons(): void {
    this.pokemons = this.pokemonService.getAll();
  }
  ngOnInit(): void {
    this.getPokemons();
  }
  searchBtn(v: string): void {
    this.searchText = v;
    console.log('this.searchText: ', this.searchText);
  }
}
