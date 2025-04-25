import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @Input() linkColor: string = '';
   @Input() data: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
