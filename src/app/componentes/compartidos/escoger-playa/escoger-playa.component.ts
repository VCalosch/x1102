import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escoger-playa',
  templateUrl: './escoger-playa.component.html',
  styleUrls: ['./escoger-playa.component.css']
})
export class EscogerPlayaComponent implements OnInit {

  years = [];

  constructor() {


    for(let i = 0; i < 39; ++i) {
        this.years.push(1980 + i); 
      }


  }

  ngOnInit() {
  }

}
