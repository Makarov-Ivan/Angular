import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonListService } from '../pokemon-list.service';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(

    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _PokemonListService: PokemonListService
  ) { }

  sub;
  id;
  pokemon: Pokemon;


  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.pokemon = this._PokemonListService.getById(this.id);
    });
    this.pokemon.date = this.pokemon.date ? this.pokemon.date : new Date().toLocaleDateString();
  }
  saveChangesOfPokemons(id, name, damage, date, additionalInfo): void {
    this._PokemonListService.changePokemonArr(id, name, damage, date, additionalInfo)
    alert(`${name} was changed`);
    this._router.navigate(['info', id]);
  }
  cancelChange(id, name): void {
    if (confirm(`Do you want to stop edit ${name}?`)) {
      this._router.navigate(['info', id]);
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this._router.navigate(['']);
  }

}
