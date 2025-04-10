import { Component, Input, OnInit } from '@angular/core';
import { FeaturesService } from 'src/app/@core/services/features.service';
import { HeaderService } from 'src/app/@core/services/header.service';
import { OverviewService } from 'src/app/@core/services/overview.service';
import { ScopeService } from 'src/app/@core/services/scope.service';

@Component({
  selector: 'app-afrexim',
  templateUrl: './afrexim.component.html',
  styleUrls: ['./afrexim.component.scss']
})
export class AfreximComponent implements OnInit {



  constructor(public headerService:HeaderService, public featureService: FeaturesService, public scopeService: ScopeService, public overviewService: OverviewService) { }

  ngOnInit(): void {
   
  }
  

}
