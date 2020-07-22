import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public toastController: ToastController,private route: Router) { }
  pro = []
  name = ''
  mobile = ''
  password = ''
  email = ''
  age = ''
  sex = ''
  address = ''
  ngOnInit() {
  }
  onButtonPress(){
    var msg = ''
    if(this.name == '' || this.mobile == '' || this.password == '' || this.email == '' || this.age == '' || this.sex == '' || this.address == ''){
      msg = 'Please Enter All Details';
      this.presentToast(msg);
    }
    else{
      msg = 'Sucessfully signed up';
      this.presentToast(msg);
      console.log(localStorage.getItem('data'));
      var data = [{name:this.name,mobile:this.mobile,password:this.password,email:this.email,age:this.age,sex:this.sex,address:this.address}]
      localStorage.setItem('user',JSON.stringify(data[0]))
      if(localStorage.getItem('data') == null){
        this.pro = data
        localStorage.setItem('data',JSON.stringify(data))
      }
      else{
        this.pro = JSON.parse(localStorage.getItem('data'))
        this.pro.push(data[0]);
        data = this.pro;
        localStorage.setItem('data',JSON.stringify(data))
      }
      this.route.navigate(['/tabs']);
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
