import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.scss']
})
export class TrusteeComponent implements OnInit {

   trustees=[
    {
      img: 'assets/logos/wema.svg'
    },
    {
      img: 'assets/logos/afrex.svg'
    },
    {
      img: 'assets/logos/optiva.svg'
    },
    {
      img: 'assets/logos/sterling.svg'
    },
    {
      img: 'assets/logos/zenith.svg'
    },
    {
      img: 'assets/logos/leatherback.svg'
    },
    {
      img: 'assets/logos/anelloh.svg'
    },
   ]
  
  constructor() { }

  ngOnInit(): void {
    this.trustees = this.trustees;
  }

}
