import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    anime
      .timeline({ loop: false })
      .add({
        targets: '.c2 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,

        // delay: (el: any, i: any) => 800 * i,
      })
      .add({
        targets: '.c2',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }
}
