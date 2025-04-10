import { Component, OnInit } from '@angular/core';
import { TrusteeService } from 'src/app/@core/services/trustee.service';

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.scss']
})
export class TrusteeComponent implements OnInit {

   trustees: {img: string}[]=[];
  constructor(private trusteeService: TrusteeService) { }

  ngOnInit(): void {
    this.trustees = this.trusteeService.trustees;
  }

}
