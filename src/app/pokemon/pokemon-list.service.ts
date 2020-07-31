import { Injectable } from '@angular/core';
import { Pokemons } from './pokemon.list';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor() { }
  pokemonList: Pokemon[] = Pokemons;

  public getById(id: any): Pokemon {
    return Pokemons.find(p => p.id === Number(id));
  }

  getAll(): Pokemon[] {
    this.pokemonList = Pokemons;
    return this.pokemonList;
  }
  changePokemonArr(id: any, name, damage, date, additionalInfo): void {
    for (const el of Pokemons) {
      if (el.id === Number(id)) {
        el.name = name;
        el.damage = damage;
        el.date = date || undefined;
        el.additionalInfo = additionalInfo || undefined;
      }
    }
  }

}
