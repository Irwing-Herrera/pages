import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  header:number = 0;
  maxHeader:number = 1;

  constructor() {}

  ngOnInit() {
    setInterval(function(){ 
      this.header = (this.header == this.maxHeader) ? this.maxHeader : this.header; 
    }, 3000);
  }

}
