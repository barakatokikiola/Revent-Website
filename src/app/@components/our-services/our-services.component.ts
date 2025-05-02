import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  services=[
    {
      name: 'Software Development',
      desc: 'We can help you at every stage of the product development lifecycle. Conquer the target market with a truly invested team by your side.'
    },
    {
      name: 'Product Development',
      desc: 'We can help you at every stage of the product development lifecycle. Conquer the target market with a truly invested team by your side.'
    },
    {
      name: 'Tech, Clients & Managed Services',
      desc: 'We can help you at every stage of the product development lifecycle. Conquer the target market with a truly invested team by your side.'
    },
    {
      name: 'Cloud & Devops Engineering',
      desc: 'We can help you at every stage of the product development lifecycle. Conquer the target market with a truly invested team by your side.'
    },
    {
      name: 'Developer & Talent Outsourcing',
      desc: 'Get additional resources for a project or long-term collaboration. Our outsourcing services connect you with skilled professionals who seamlessly integrate into your organization.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
 
  }

 
}
