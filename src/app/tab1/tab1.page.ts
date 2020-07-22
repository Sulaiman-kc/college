import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LogoutPage } from '../logout/logout.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  edit1 = false;
  user
  constructor(public popoverController: PopoverController) {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user);
    
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LogoutPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  edit(){
    this.edit1 = true;
  }
  submit(){
    this.edit1 = false;
  }
}
