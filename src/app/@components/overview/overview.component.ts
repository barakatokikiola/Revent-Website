import { Component, Input, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/@core/services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {


  @Input() data: any; 

  @Input() isAfrexim: boolean = false;
  
  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
  }

}
