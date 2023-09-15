import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BioComponent } from './bio.component';
import { BioRoutingModule } from './bio-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BioComponent],
  imports: [
    RouterModule.forChild([]),
    MatCardModule,
    BioRoutingModule,
    MatIconModule,
  ],
})
export class BioModule {}
