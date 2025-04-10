import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrusteeService {
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
}
