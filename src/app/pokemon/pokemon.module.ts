import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { PokemonCardItemComponent } from './pokemon-card-item/pokemon-card-item.component';
import { PokemonWrapperComponent } from './pokemon-wrapper/pokemon-wrapper.component';
import { IsListService } from './is-list.service';
import { ButtonComponent } from './button/button.component';
import { StrongPokemonDirective } from './strong-pokemon.directive';
import { RepresentationToggleComponent } from './representation-toggle/representation-toggle.component';

@NgModule({
  declarations: [
    PokemonMainComponent,
    PokemonCardItemComponent,
    PokemonWrapperComponent,
    ButtonComponent,
    StrongPokemonDirective,
    RepresentationToggleComponent,
  ],
  imports: [CommonModule],
  exports: [PokemonWrapperComponent],
  providers: [IsListService],
})
export class PokemonModule { }
