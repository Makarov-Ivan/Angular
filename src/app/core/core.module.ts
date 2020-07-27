import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonHeaderComponent } from "./core-header/pokemon-header.component";
import { PokemonFooterComponent } from "./core-footer/pokemon-footer.component";

@NgModule({
  declarations: [PokemonFooterComponent, PokemonHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PokemonFooterComponent, PokemonHeaderComponent]
})
export class CoreModule { }
