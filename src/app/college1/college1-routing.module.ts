import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { College1Page } from './college1.page';

const routes: Routes = [
  {
    path: '',
    component: College1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class College1PageRoutingModule {}
