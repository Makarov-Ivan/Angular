import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonListService } from '../pokemon-list.service';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss',]
})
export class PokemonInfoComponent {

  constructor(

    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _PokemonListService: PokemonListService
  ) { }

  sub;
  id;
  pokemon: Pokemon;
  btnValue = 'Catch!';
  isCathed = false;

  clcikHandler(name: string): void {
    if (this.isCathed) {
      this.btnValue = 'Catch!';
      this.isCathed = !this.isCathed;
      console.log(`${name} was released`);
    } else {
      this.btnValue = 'Release!';
      this.isCathed = !this.isCathed;
      console.log(`${name} was cathced`);
    }
  }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.pokemon = this._PokemonListService.getById(this.id);
    });
    this.pokemon.date = this.pokemon.date ? this.pokemon.date : new Date().toLocaleDateString();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this._router.navigate(['']);
  }
}
