import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio.component';

const routes: Routes = [
  {
    path: '',
    component: BioComponent, // This route loads the BioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioRoutingModule {}
