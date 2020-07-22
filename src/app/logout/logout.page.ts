import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public toastController: ToastController,private route: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.setItem('LogedIn','false');
    this.presentToast('Sucessfully logged out');
    localStorage.removeItem('user')
    this.route.navigate(['/login']);

  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
