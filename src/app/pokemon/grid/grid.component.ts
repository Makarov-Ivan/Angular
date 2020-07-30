import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon.interface';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }
  @Input() pokemons: Pokemon[];
  @Input() searchText: string;
  ngOnInit(): void {
  }

}
