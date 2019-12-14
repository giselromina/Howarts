import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellsRoutingModule } from './spells-routing.module';
import { GetAllSpellsComponent } from './get-all-spells/get-all-spells.component';


@NgModule({
  declarations: [GetAllSpellsComponent],
  imports: [
    CommonModule,
    SpellsRoutingModule
  ]
})
export class SpellsModule { }
