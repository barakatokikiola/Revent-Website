import { Component, Input, OnInit } from '@angular/core';
import { FeaturesService } from 'src/app/@core/services/features.service';
import { HeaderService } from 'src/app/@core/services/header.service';
import { OverviewService } from 'src/app/@core/services/overview.service';


@Component({
  selector: 'app-optiva',
  templateUrl: './optiva.component.html',
  styleUrls: ['./optiva.component.scss']
})
export class OptivaComponent implements OnInit {
  
    constructor(public headerService:HeaderService, public overviewService: OverviewService, public featureService: FeaturesService) { }
  
    ngOnInit(): void {
    
    }
    
}
