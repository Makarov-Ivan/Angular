import { Component, OnInit } from '@angular/core';
// import { Pokemons } from '../pokemon.list';
import { Pokemon } from "../pokemon.interface";
import { PokemonListService } from "../pokemon-list.service";
import { IsListService } from '../is-list.service';

@Component({
  selector: 'app-pokemon-card-item',
  templateUrl: './pokemon-card-item.component.html',
  styleUrls: ['./pokemon-card-item.component.scss'],
})
export class PokemonCardItemComponent implements OnInit {
  constructor(public isListService: IsListService, private pokemonService: PokemonListService) { }
  pokemons: Pokemon[];
  getPokemons(): void {
    this.pokemons = this.pokemonService.getAll();
  }
  ngOnInit(): void {
    this.getPokemons();
  }
}
