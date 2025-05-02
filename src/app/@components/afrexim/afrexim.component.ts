import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-afrexim',
  templateUrl: './afrexim.component.html',
  styleUrls: ['./afrexim.component.scss']
})
export class AfreximComponent implements OnInit {

  scope = [
    {
      title: 'Flowmono - Discovery Phase',
      desc: 'One of the major lessons from the pandemic era is that business process configuration is a key requirement for ensuring business continuity.',
      desc1: 'In the current African business landscape, business owners express their frustrations over the rising rate of developer attritions and the shortage of developers that can help them design and develop business process automation. Most of the available process management solutions are built around an expensive budget, complex architecture, and take time to implement'
    ,span: false 
    },
    {
      title: 'Flowmono 1.0',
      desc: 'One of the major lessons from the pandemic era is that business process configuration is a key requirement for ensuring business continuity',
      desc1: 'In the current African business landscape, business owners express their frustrations over the rising rate of developer attritions and the shortage of developers that can help them design and develop business process automation. Most of the available process management solutions are built around an expensive budget, complex architecture, and take time to implement.'
    ,span: false
    },
    {
      title: 'Flowmono 2.0',
      desc: 'Flowmono makes contract and agreement processes easier. Individuals and freelancers, small and medium enterprises, and major corporations looking to reduce paperwork and move to a paperless process can benefit from the solution',
       desc1: 'According to an Onespan report, financial institutions that implemented electronic signatures saw a 92% reduction in scanning errors and missing files by 66%.To reinforce the confidence and safety of users’ data, Flowmono uses encryption technology to protect user data'
      ,span: true
      },
  ]
  
  overview= [
    {
      btn: ['Websites', 'Web applications', 'SAAS'],
    btnColors: ['#FEE6FA', '#E3D6F6','#FEE6FA'],
      overview: "Vendor management system (VMS) that allows employers to manage their vendors more effectively by automating the entire vendor management process.",
      statement1: "Vendor management is a crucial part of any business, but it can also be time-consuming and challenging to manage. Many employers struggle to keep track of their vendors' information, including their credentials.",
      statement2:'The traditional approach of managing vendors using spreadsheets or paper-based forms can be tedious and prone to errors.',
      solution1: "With a VMS, employers can streamline their vendor management process, reduce costs, and improve overall efficiency.",
      solution2: 'The vendor onboarding module allows employers to collect and verify vendor information, including company details, tax identification, insurance coverage, and credentials. Once the vendor is approved, employers can assign jobs to them, set deadlines, reminders, and monitor progress.'
    }
  ];

  feature = [
    {
      title: '1. Quote calculator (Help to calculate total cost to be paid)',
      desc1: "QR code payments are made via the customer's smartphone when they scan the code. Once saved, they are taken to a payment page where they will have the option to enter their chosen payment details or use a mobile payment solution to complete the transaction.",
      desc2: "A vendor can also scan a QR code on their customer's phone. This code is provided by their bank or payment app and will contain their card details, which the business can use to finalize the transaction.",
      img: 'assets/afrexim1.png',
      thumbnail:['']
    },
    {
      title: '2. Migration route',
      desc1: 'One of the major lessons from the pandemic era is that business process configuration is a key requirement for ensuring business continuity',
      desc2: 'n the current African business landscape, business owners express their frustrations over the rising rate of developer attritions and the shortage of developers that can help them design and develop business process automation. Most of the available process management solutions are built around an expensive budget, complex architecture, and take time to implement',
      img: 'assets/afrexim2.png',
      thumbnail:['assets/afreximt1.png', 'assets/afreximt2.png','assets/afreximt3.png','assets/afreximt4.png', ]
    }
 ]

 header=[{
  logo:"assets/bg/reventwhite.svg",
  routeTo: '',
  items:[
    { route: '', label: 'Home' },
    { route: '/vybe', label: 'VybeCash' },
    { route: '/services', label: 'Our Services' },
    { route: '/optiva', label: 'Optiva' },
   ],
  desc: 'Vendor management portal',
  routeName: 'Home',
  title: 'Afrexim',
  btn: ['Websites', 'Web applications', 'SAAS'],
  btnColors: ['#FEE6FA', '#E3D6F6','#FEE6FA'],
  bg: 'assets/bg/afrex.jpg',
  img: 'assets/afrex.png',
 
}]
  constructor() { }

  ngOnInit(): void {
   
  }
  

  
  


}
