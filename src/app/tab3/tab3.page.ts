import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LogoutPage } from '../logout/logout.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor(public popoverController: PopoverController) {}
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LogoutPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
