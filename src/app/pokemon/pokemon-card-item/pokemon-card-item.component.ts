import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../pokemon-main/pokemon.list';
import { IsListService } from '../is-list.service';

@Component({
  selector: 'app-pokemon-card-item',
  templateUrl: './pokemon-card-item.component.html',
  styleUrls: ['./pokemon-card-item.component.scss'],
})
export class PokemonCardItemComponent implements OnInit {
  constructor(public isListService: IsListService) {}
  pokemons = Pokemons;
  ngOnInit(): void {}
}
