import { Component, Input, OnInit } from '@angular/core';
import { ScopeService } from 'src/app/@core/services/scope.service';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {

  @Input() scopes:any;

  @Input() isAfrexim: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
