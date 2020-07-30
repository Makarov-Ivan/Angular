import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() pokemons: Pokemon[];
  @Input() searchText: string;

  ngOnInit(): void {
  }

}
