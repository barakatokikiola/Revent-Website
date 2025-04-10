import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

media = [
  {
    img: 'assets/logos/medium.svg'
  },
  {
    img: 'assets/logos/nairametrics.svg'
  },
  {
    img: 'assets/logos/techcabal.svg'
  },
  {
    img: 'assets/logos/techcity.svg'
  },
]

  constructor() { }
}
