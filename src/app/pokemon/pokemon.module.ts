import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { PokemonCardItemComponent } from './pokemon-card-item/pokemon-card-item.component';
import { PokemonWrapperComponent } from './pokemon-wrapper/pokemon-wrapper.component';
import { IsListService } from './is-list.service';
import { ButtonComponent } from './button/button.component';
import { StrongPokemonDirective } from './strong-pokemon.directive';
import { RepresentationToggleComponent } from './representation-toggle/representation-toggle.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';

import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokemonMainComponent,
    PokemonCardItemComponent,
    PokemonWrapperComponent,
    ButtonComponent,
    StrongPokemonDirective,
    RepresentationToggleComponent,
    PokemonInfoComponent,
    GridComponent,
    ListComponent,
    SearchPipe,
  ],
  imports: [CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'info/:id', component: PokemonInfoComponent
      },
      {
        path: '', component: PokemonMainComponent
      }
    ])
  ],
  exports: [PokemonWrapperComponent],
  providers: [IsListService, SearchPipe],
})
export class PokemonModule { }
