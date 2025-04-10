import { Component, OnInit } from '@angular/core';
import { FeaturesService } from 'src/app/@core/services/features.service';
import { HeaderService } from 'src/app/@core/services/header.service';
import { OverviewService } from 'src/app/@core/services/overview.service';
import { ScopeService } from 'src/app/@core/services/scope.service';

@Component({
  selector: 'app-vybecash',
  templateUrl: './vybecash.component.html',
  styleUrls: ['./vybecash.component.scss']
})
export class VybecashComponent implements OnInit {




  constructor(public headerService:HeaderService, public overviewService: OverviewService, public featureService:FeaturesService, public scopeService: ScopeService) { }

  ngOnInit(): void {
 
  }
  

}
