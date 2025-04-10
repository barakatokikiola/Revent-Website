import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  others = [
    {
      img: 'assets/other1.jpg',
      dept: 'SAAS',
      title: 'Flowmono - Electronic Signing & Process Management',
      desc: 'With flowmono, it is easier to speed up your recruitment process, sign and manage all employee forms, contracts and documents in digital format.'
    },
    {
      img: 'assets/other2.jpg',
      dept: 'ENTERPRISE SOLUTION',
      title: 'Optiva Capital - Calculate & Manage Migration Fee',
      desc:'The software application is designed to simplify the process of calculating various types of fees, including legal, processing, and government fees for the applicants ...'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
