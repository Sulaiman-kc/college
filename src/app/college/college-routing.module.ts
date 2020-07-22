import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegePage } from './college.page';

const routes: Routes = [
  {
    path: '',
    component: CollegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegePageRoutingModule {}
