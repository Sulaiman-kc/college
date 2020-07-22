import { Component, OnInit } from '@angular/core';
import { RouterModule, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college',
  templateUrl: './college.page.html',
  styleUrls: ['./college.page.scss'],
})
export class CollegePage implements OnInit {

  constructor(private route: Router) { }
  data
  ngOnInit() {
    this.data = this.featured
  }
  featured = [{name:"PACE" , location:"mangaluru" ,img:''},
  {name:"LBSCEK" , location:"kasaragod" ,img:''},
  {name:"ABCD" , location:"chennai" ,img:''},
  {name:"ASDF" , location:"kannur" ,img:''},
]

  onSearchChange(event){
    console.log(event);
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
