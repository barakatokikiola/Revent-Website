import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-optiva',
  templateUrl: './optiva.component.html',
  styleUrls: ['./optiva.component.scss']
})
export class OptivaComponent implements OnInit {
  

  header=[{
    logo:"assets/bg/reventwhite.svg",
    routeTo: '/afrexim',
    items:[
      { route: '', label: 'Home' },
      { route: '/vybe', label: 'VybeCash' },
      { route: '/services', label: 'Our Services' },
      { route: '/afrexim', label: 'Afrexim' }
     ],
    routeName: 'Afrexim',
    title: 'Optiva Capital',
    desc: 'Immigration investment & wealth management',
    btn: ['Migration','Web app','Mobile App', 'Fintech'],
    btnColors: ['#FEE6FA', '#E3D6F6', '#DEDEDE','#FEE6FA'],
    bg: 'assets/bg/optiva.jpg',
    img: 'assets/optivacap.png',
    
  }]

  feature = [
    {
      title: '1. Quote calculator (Help to calculate total cost to be paid)',
      desc1: "QR code payments are made via the customer's smartphone when they scan the code. Once saved, they are taken to a payment page where they will have the option to enter their chosen payment details or use a mobile payment solution to complete the transaction.",
      desc2: "A vendor can also scan a QR code on their customer's phone. This code is provided by their bank or payment app and will contain their card details, which the business can use to finalize the transaction.",
      img: 'assets/vybe1.png',
      thumbnail:['assets/thumb1.png']
    },
    {
      title: '2. Migration route',
      desc1: 'One of the major lessons from the pandemic era is that business process configuration is a key requirement for ensuring business continuity',
      desc2: 'n the current African business landscape, business owners express their frustrations over the rising rate of developer attritions and the shortage of developers that can help them design and develop business process automation. Most of the available process management solutions are built around an expensive budget, complex architecture, and take time to implement',
      img: 'assets/vybe2.png',
      thumbnail:['']
    }
  ]

  
  overview = [
    {
      btn: ['Migration','Web app','Mobile App', 'Fintech'],
      btnColors: ['#FEE6FA', '#E3D6F6', '#DEDEDE','#FEE6FA'],
      overview: "Your one-stop shop for all immigration, residency & citizenship consulting services!",
      statement1: "The traditional approach of managing migration fees using spreadsheets or paper-based forms can be tedious, error-prone and may not allow for easy tracking of payments. As a result, many businesses are seeking an efficient and automated system to manage migration fees.",
      statwment2:'',
      solution1: '',
      solution2: "With Optiva Capital's software application, employers can easily add applicants to the applicants register and generate a quote for their fees. The system also issues invoices to applicants in instalments, making it easier for them to manage their payments. Once payment is received, the system generates a receipt, which can be used for future reference."
    }
  ];
    constructor() { }
  
    ngOnInit(): void {
    
    }
    
}
