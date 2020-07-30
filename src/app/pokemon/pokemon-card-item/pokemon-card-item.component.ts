import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-card-item',
  templateUrl: './pokemon-card-item.component.html',
  styleUrls: ['./pokemon-card-item.component.scss'],
})

export class PokemonCardItemComponent implements OnInit {

  constructor(private _router: Router) { }
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
  goToEditPage(id: number): void {
    this._router.navigate(['info', id]);
  }
  ngOnInit(): void {
  }
}
