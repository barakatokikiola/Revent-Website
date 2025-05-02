import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  navbar=[{
    logo: "assets/revent.svg",
   items:[
    { route: '', label: 'Home' },
    { route: '/vybe', label: 'VybeCash' },
    { route: '/services', label: 'Our Services' },
    { route: '/optiva', label: 'Optiva' },
    { route: '/afrexim', label: 'Afrexim' }
   ]
  }]
  constructor() { }

  ngOnInit(): void {
  }
  
}
