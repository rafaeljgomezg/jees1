import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jees1';
  isMenuOpen = true;

  constructor(){

  }

  ngOnInit(): void {

  }

  cerrarMenu() {
    this.isMenuOpen = false;
    setTimeout(() =>{
      this.isMenuOpen=true
    },1)
    
  }
}



