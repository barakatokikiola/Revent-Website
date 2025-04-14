import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vybecash',
  templateUrl: './vybecash.component.html',
  styleUrls: ['./vybecash.component.scss']
})
export class VybecashComponent implements OnInit {

  vybecashHeader=[{
    logo:"assets/logos/colored-logo.svg",
    routeTo: '/optiva',
    routeName: 'Optiva',
    title: 'VybeCash',
    desc: 'Manage your wallet and transactions.',
    btn: ['Mobile App', 'Fintech', 'Finance'],
    btnColors: ['#FEE6FA', '#E3D6F6', '#DEDEDE'],
    bg: 'assets/bg/vybecash.jpg',
    img: 'assets/vybeCash.png',
    
  }];  

  vybecash = [
    {
      btn: ['Mobile App', 'Fintech', 'Finance'],
      btnColors: ['#FEE6FA', '#E3D6F6', '#DEDEDE'],
      overview: "Vybecash is a platform that enhances users' digital payment experiences with financial accounts, transfers, bill payments, and savings services.",
      statement1: "Traditional financial transactions and banking services often prove cumbersome and time-consuming. Individuals, businesses, and organizations face numerous challenges, including slow money transfers, lack of transparency, security concerns, and limited access to modern financial tools.",
      statement2: 'Additionally, the absence of user-friendly platforms often hinders people from making informed financial decisions and optimizing their funds effectively.',
      solution: "The need of the hour is a dynamic application that addresses these pain points and revolutionizes the way users manage their finances.",
      solution2:"This concern made the client identify the need for a financial application that allows users to run digital banking and payment processing while also growing their financial portfolio through various savings plans.",
      
    }
  ];


  scope = [
    {
      title: 'Vybecash 1.0',
      desc: 'VybeCash 1.0 was built to understand the importance of streamlined and efficient financial processes, particularly in the finance industry.',
      desc1: 'Business continuity and individual adaptability are paramount for sustained success. To address the challenges faced by African businesses, Vybecash aims to provide a user-friendly, cost-effective, and agile solution for automating financial processes. '
    ,span: ''
    },
    {
      title: 'Vybecash Merchant',
      desc: 'Business owners form a core of business operation which is why we decided to build a variation of an app that can alleviate their frustrations by harnessing our intuitive fintech app.',
      desc1: 'Our platform offers simplified financial process management tools that empower businesses to make transactions seamlessly. '
    ,span: ''
    },
    {
      title: 'Vybecash 2.0',
      desc: 'Vybecash needed to incorporate user-friendly design principles and intuitive interfaces tailored to finance terminologies. This approach allows businesses and individuals to easily navigate and customize their financial processes without extensive technical knowledge',
      desc1: 'By democratizing the financial experience, Vybecash enables individuals and businesses of all sizes to streamline their financial operations, improve efficiency, and enhance their overall business continuity. '
      ,span: 'Coming soon'
    },
  ]

  feature = [
    {
      title: '1. Receive payment using QR Code & Link',
      desc1: "QR code payments are made via the customer's smartphone when they scan the code. Once saved, they are taken to a payment page where they will have the option to enter their chosen payment details or use a mobile payment solution to complete the transaction.",
      desc2: "A vendor can also scan a QR code on their customer's phone. This code is provided by their bank or payment app and will contain their card details, which the business can use to finalize the transaction.",
      img: 'assets/f.png',
      thumbnail:['assets/thumb1.png', 'assets/thumb2.png']
    },
    {
      title: '2. Payment Link',
      desc1: 'The Payment Link Integration known as Vybelink is a groundbreaking addition to Vybecash, designed to revolutionize the way users conduct transactions.',
      desc2: 'With this innovative feature, Vybecash introduces a simple and secure method for businesses, freelancers, and individuals to receive payments effortlessly. The Payment Link Integration empowers VybeCash users to generate custom payment links and share them via various communication channels, offering a versatile and convenient solution for collecting payments from customers or clients.',
      img: 'assets/vybe2.png',
      thumbnail:['']
    }
  ]

  constructor() { }

  ngOnInit(): void {
 
  }
  

}
