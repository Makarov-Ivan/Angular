import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonFooterComponent } from './pokemon-footer/pokemon-footer.component';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { PokemonCardItemComponent } from './pokemon-card-item/pokemon-card-item.component';
import { PokemonWrapperComponent } from './pokemon-wrapper/pokemon-wrapper.component';



@NgModule({
  declarations: [PokemonHeaderComponent, PokemonFooterComponent, PokemonMainComponent, PokemonCardItemComponent, PokemonWrapperComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
