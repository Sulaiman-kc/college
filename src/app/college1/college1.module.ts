import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { College1PageRoutingModule } from './college1-routing.module';

import { College1Page } from './college1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    College1PageRoutingModule
  ],
  declarations: [College1Page]
})
export class College1PageModule {}
