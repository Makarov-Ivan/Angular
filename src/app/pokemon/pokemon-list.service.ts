import { Injectable } from '@angular/core';
import { Pokemons } from './pokemon.list';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor() { }
  pokemonList: Pokemon[] = Pokemons;
  filter(searchName: string): void {
    this.pokemonList = this.pokemonList.filter((el) => {
      el.name.includes(searchName.toLowerCase());
    });
  }
  getById(id: number): Pokemon {
    return this.pokemonList.filter(el => el.id === id)[0];
  }
  getAll(): Pokemon[] {
    this.pokemonList = Pokemons;
    return this.pokemonList;
  }
  // getById(exactId: number): Pokemon[] {
  //   this.pokemonList = this.pokemonList.filter(el => {
  //     return el.id === exactId ? true : false;
  //   });
  //   return this.pokemonList;
  // }

}
