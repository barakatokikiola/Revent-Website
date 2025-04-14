import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {


  @Input() data: any; 

  @Input() isAfrexim: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
