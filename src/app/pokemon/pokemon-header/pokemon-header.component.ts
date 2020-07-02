import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss'],
})
export class PokemonHeaderComponent implements OnInit {
  constructor() {}
  isListed = false;
  ngOnInit(): void {}
  clickHendle(): void {
    this.isListed = !this.isListed;
    console.log(`listed: ${this.isListed}`);
  }
}
