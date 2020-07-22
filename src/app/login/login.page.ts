import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('data'))
  }
  data = []
  mobile = ''
  password = ''
  loggedIn = true;
  constructor(public toastController: ToastController,private route: Router) {
    if(localStorage.getItem('LogedIn') == 'true'){
      console.log('you have already logged in');
      this.route.navigate(['/tabs']);
    }
    else{
      console.log('please login');
      this.loggedIn = false;
    }
  }
  onButtonPress(){
    console.log(this.mobile);
    console.log(this.password);
    if(this.mobile == '' || this.password == ''){
      this.presentToast('Please Enter Mobile number and Password')
      localStorage.setItem('LogedIn', 'false')

    }else{
      var flag = false;
      if(this.data == null){
        this.presentToast('Incorrect Password or User Name')
      }
      else{
        for(let i=0;i<this.data.length;i++){
          console.log('hrlo');
          
          if(this.mobile == this.data[i].mobile && this.password == this.data[i].password){
            localStorage.setItem('user',(this.data[i]))
            flag = true;
            break;
          }
          else{
            this.presentToast('Incorrect Password or User Name')
            localStorage.setItem('LogedIn', 'false')
          }
        }
      }
      
    }
    console.log(flag);
    
    if(flag){
      this.presentToast('Sucessfully logged in')
      this.route.navigate(['/tabs/tab1']);
      localStorage.setItem('LogedIn', 'true')
    }
  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
