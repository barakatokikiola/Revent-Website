import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  footer_list = [
    {
      title: 'Contact Us',
      point: ['16, Kafayat Abdulrazaq, Lekki Phase 1, Lagos, Nigeria.',
        'info@reventtechnologies.com'],
      icon: ['assets/icons/facebook.svg', 'assets/icons/linkedin.svg','assets/icons/instagram.svg','assets/icons/twitter.svg','assets/icons/thread.svg']
    },
    {
      title: 'Services',
      point: ['Software Development',
                'Product Development',
                'Tech, Clients & Managed Services',
                'Cloud & Devops Engineering',
                'Developer & Talent Outsourcing'],
                icon: ['']
    }, 
    {
      title: 'Support',
      point: [ 'About Us','Blog', 'FAQs'],
      icon: ['']
    },
    {
      title: 'Legal Links',
      point: [ 'Terms of Use','Privacy Policy'],
      icon: ['']
    },
    
  ]
  constructor() { }
}
