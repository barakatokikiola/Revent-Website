import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  vybecash=[{
    logo:"assets/logos/colored-logo.svg",
    routeTo: '/optiva',
    routeName: 'Optiva',
    title: 'VybeCash',
    desc: 'Manage your wallet and transactions.',
    btn: ['Mobile App', 'Fintech', 'Finance'],
    btnColors: ['#FEE6FA', '#E3D6F6', '#DEDEDE'],
    bg: 'assets/bg/vybecash.jpg',
    img: 'assets/vybeCash.png',
    
  }]

  optiva=[{
    logo:"assets/bg/reventwhite.svg",
    routeTo: '/afrexim',
    routeName: 'Afrexim',
    title: 'Optiva Capital',
    desc: 'Immigration investment & wealth management',
    btn: ['Migration','Web app','Mobile App', 'Fintech'],
    btnColors: ['#FEE6FA', '#E3D6F6', '#DEDEDE','#FEE6FA'],
    bg: 'assets/bg/optiva.jpg',
    img: 'assets/optivacap.png',
    
  }]


  afrexim=[{
    logo:"assets/bg/reventwhite.svg",
    routeTo: '',
    desc: 'Vendor management portal',
    routeName: 'Home',
    title: 'Afrexim',
    btn: ['Websites', 'Web applications', 'SAAS'],
    btnColors: ['#FEE6FA', '#E3D6F6','#FEE6FA'],
    bg: 'assets/bg/afrex.jpg',
    img: 'assets/afrex.jpg',
   
  }]
  constructor() { }
}
