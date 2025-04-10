import { Component, OnInit } from '@angular/core';
import { OurServicesService } from 'src/app/@core/services/our-services.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  services: {name:string, desc:string}[] = [];
  constructor(private ourServices:OurServicesService ) { }

  ngOnInit(): void {
    this.services = this.ourServices.our_services
  }

 
}
