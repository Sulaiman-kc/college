import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LogoutPage } from '../logout/logout.page';
import { Router } from '@angular/router';
import { RouterModule, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public popoverController: PopoverController,private route: Router) {}
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LogoutPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  featured = [{name:"PACE" , location:"mangaluru" ,img:''},
  {name:"LBSCEK" , location:"kasaragod" ,img:''},
  {name:"ABCD" , location:"chennai" ,img:''},
  {name:"ASDF" , location:"kannur" ,img:''},
]

  card(){
    this.route.navigate(['/college']);
  }
  college(data){
    let nav: NavigationExtras = {
      queryParams:{
        ss:JSON.stringify(data)
      }
    }
    this.route.navigate(['/college1'],nav);
    // console.log(data);
  }
}
