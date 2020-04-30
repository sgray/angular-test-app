import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  blurTimeout: number;
  title = 'test-app';

  ngOnInit() {
    this.blurTimeout = setTimeout(() => { console.log('test'); });
  }

  ngAfterViewInit() {
    console.log(this.blurTimeout);
  }
}
