import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-college1',
  templateUrl: './college1.page.html',
  styleUrls: ['./college1.page.scss'],
})
export class College1Page implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  data
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params && params.ss){
        console.log(JSON.parse(params.ss));
        this.data = JSON.parse(params.ss)
      }
    })
  }
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

}
