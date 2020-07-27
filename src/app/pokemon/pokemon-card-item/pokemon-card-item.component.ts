import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-card-item',
  templateUrl: './pokemon-card-item.component.html',
  styleUrls: ['./pokemon-card-item.component.scss'],
})

export class PokemonCardItemComponent implements OnInit {

  constructor() { }
  @Input() pokemon: Pokemon;


  value = 'Catch!';
  isCathed = false;

  clcikHandler(name: string): void {
    if (this.isCathed) {
      this.value = 'Catch!';
      this.isCathed = !this.isCathed;
      console.log(`${name} was released`);
    } else {
      this.value = 'Release!';
      this.isCathed = !this.isCathed;
      console.log(`${name} was cathced`);
    }
  }

  ngOnInit(): void {
  }
}
