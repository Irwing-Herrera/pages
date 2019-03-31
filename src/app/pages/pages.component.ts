import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() {
    
    window.onscroll = function () { changueColorNav() };
    function changueColorNav() {
      let nav = document.getElementById("sideNav");
      if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
        nav.style.transition = "background-color 500ms linear";
        nav.style.backgroundColor = "rgba(0,0,0,0.6)";
      } else {
        nav.style.backgroundColor = "rgba(0,0,0,0)";
        // nav.removeAttribute("style")
      }
    }
  }

  ngOnInit() {
  }

  
}
