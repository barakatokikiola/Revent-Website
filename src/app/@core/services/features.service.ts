import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  vybecash = [
    {
      title: '1. Receive payment using QR Code & Link',
      desc1: "QR code payments are made via the customer's smartphone when they scan the code. Once saved, they are taken to a payment page where they will have the option to enter their chosen payment details or use a mobile payment solution to complete the transaction.",
      desc2: "A vendor can also scan a QR code on their customer's phone. This code is provided by their bank or payment app and will contain their card details, which the business can use to finalize the transaction.",
      img: 'assets/qr.jpg',
      thumbnail:['assets/thumb1.jpg', 'assets/thumb2.jpg']
    },
    {
      title: '2. Payment Link',
      desc1: 'The Payment Link Integration known as Vybelink is a groundbreaking addition to Vybecash, designed to revolutionize the way users conduct transactions.',
      desc2: 'With this innovative feature, Vybecash introduces a simple and secure method for businesses, freelancers, and individuals to receive payments effortlessly. The Payment Link Integration empowers VybeCash users to generate custom payment links and share them via various communication channels, offering a versatile and convenient solution for collecting payments from customers or clients.',
      img: 'assets/payment.jpg',
      thumbnail:['']
    }
  ]

  optiva = [
    {
      title: '1. Quote calculator (Help to calculate total cost to be paid)',
      desc1: "QR code payments are made via the customer's smartphone when they scan the code. Once saved, they are taken to a payment page where they will have the option to enter their chosen payment details or use a mobile payment solution to complete the transaction.",
      desc2: "A vendor can also scan a QR code on their customer's phone. This code is provided by their bank or payment app and will contain their card details, which the business can use to finalize the transaction.",
      img: 'assets/qr.jpg',
      thumbnail:['assets/thumb1.jpg']
    },
    {
      title: '2. Migration route',
      desc1: 'One of the major lessons from the pandemic era is that business process configuration is a key requirement for ensuring business continuity',
      desc2: 'n the current African business landscape, business owners express their frustrations over the rising rate of developer attritions and the shortage of developers that can help them design and develop business process automation. Most of the available process management solutions are built around an expensive budget, complex architecture, and take time to implement',
      img: 'assets/payment.jpg',
      thumbnail:['']
    }
  ]

  afrexim = [
    {
      title: '1. Quote calculator (Help to calculate total cost to be paid)',
      desc1: "QR code payments are made via the customer's smartphone when they scan the code. Once saved, they are taken to a payment page where they will have the option to enter their chosen payment details or use a mobile payment solution to complete the transaction.",
      desc2: "A vendor can also scan a QR code on their customer's phone. This code is provided by their bank or payment app and will contain their card details, which the business can use to finalize the transaction.",
      img: 'assets/afr1.jpg',
      thumbnail:['']
    },
    {
      title: '2. Migration route',
      desc1: 'One of the major lessons from the pandemic era is that business process configuration is a key requirement for ensuring business continuity',
      desc2: 'n the current African business landscape, business owners express their frustrations over the rising rate of developer attritions and the shortage of developers that can help them design and develop business process automation. Most of the available process management solutions are built around an expensive budget, complex architecture, and take time to implement',
      img: 'assets/afr2.jpg',
      thumbnail:['assets/afr2t.jpg', 'assets/afr2t1.jpg','assets/afr2t2.jpg','assets/afr2t3.jpg', ]
    }
  ]
  constructor() { }
}
