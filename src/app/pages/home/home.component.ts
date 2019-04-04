import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/fade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation],
})

export class HomeComponent implements OnInit {

  header: number = 0;
  maxHeader: number = 2;
  intervalo: any = null;

  constructor() { }

  ngOnInit() {
    this.createInterval();
  }

  returnHeader() {
    clearInterval(this.intervalo);
    this.header = this.header - 1;
    if (this.header < 0)
        this.header = this.maxHeader;
    this.createInterval();
  }

  nextHeader(){
    clearInterval(this.intervalo);
    this.header = this.header + 1;
    if (this.header > this.maxHeader)
        this.header = 0;
    this.createInterval();
  }

  createInterval() {
    this.intervalo = setInterval(() => {
      this.header = this.header + 1;
      if (this.header > this.maxHeader)
        this.header = 0;
    }, 5000);
  }

}
