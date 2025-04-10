import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  blogs = [
    {
      img: 'assets/blog1.jpg',
      title: 'Why product thinking is a big thing in UX...',
      desc: 'We look at the importance of product thinking in UX design, highlighting that successful products must solve real user problems and provide meaningful solutions.',
    },
    {
      img: 'assets/blog2.jpg',
      title: 'Agile methodology : Driving successful s...',
      desc: 'This article looks at the benefits of adopting Agile methodology in software development, emphasizing its flexibility, collaboration, and customer-centric approach.',
    },
    {
      img: 'assets/blog3.jpg',
      title: 'Data privacy in the data age : Balancing ...',
      desc: 'This article looks at the significance of data privacy in the digital age and explore the need to strike a balance between innovation and personal security.',
    },
  ]

  constructor() { }
}
