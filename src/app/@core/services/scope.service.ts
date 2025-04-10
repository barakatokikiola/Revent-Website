import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScopeService {


  vybecash = [
    {
      title: 'Vybecash 1.0',
      desc: 'VybeCash 1.0 was built to understand the importance of streamlined and efficient financial processes, particularly in the finance industry.',
      desc1: 'Business continuity and individual adaptability are paramount for sustained success. To address the challenges faced by African businesses, Vybecash aims to provide a user-friendly, cost-effective, and agile solution for automating financial processes. '
    },
    {
      title: 'Vybecash Merchant',
      desc: 'Business owners form a core of business operation which is why we decided to build a variation of an app that can alleviate their frustrations by harnessing our intuitive fintech app.',
      desc1: 'Our platform offers simplified financial process management tools that empower businesses to make transactions seamlessly. '
    },
    {
      title: 'Vybecash 2.0',
      desc: 'Vybecash needed to incorporate user-friendly design principles and intuitive interfaces tailored to finance terminologies. This approach allows businesses and individuals to easily navigate and customize their financial processes without extensive technical knowledge',
      desc1: 'By democratizing the financial experience, Vybecash enables individuals and businesses of all sizes to streamline their financial operations, improve efficiency, and enhance their overall business continuity. '
    },
  ]


 afrexim = [
    {
      title: 'Flowmono - Discovery Phase',
      desc: 'One of the major lessons from the pandemic era is that business process configuration is a key requirement for ensuring business continuity.',
      desc1: 'In the current African business landscape, business owners express their frustrations over the rising rate of developer attritions and the shortage of developers that can help them design and develop business process automation. Most of the available process management solutions are built around an expensive budget, complex architecture, and take time to implement'
     },
    {
      title: 'Flowmono 1.0',
      desc: 'One of the major lessons from the pandemic era is that business process configuration is a key requirement for ensuring business continuity',
      desc1: 'In the current African business landscape, business owners express their frustrations over the rising rate of developer attritions and the shortage of developers that can help them design and develop business process automation. Most of the available process management solutions are built around an expensive budget, complex architecture, and take time to implement.'
    },
    {
      title: 'Flowmono 2.0',
      desc: 'Flowmono makes contract and agreement processes easier. Individuals and freelancers, small and medium enterprises, and major corporations looking to reduce paperwork and move to a paperless process can benefit from the solution',
       desc1: 'According to an Onespan report, financial institutions that implemented electronic signatures saw a 92% reduction in scanning errors and missing files by 66%.To reinforce the confidence and safety of users’ data, Flowmono uses encryption technology to protect user data'
      },
  ]
  constructor() { }
}
