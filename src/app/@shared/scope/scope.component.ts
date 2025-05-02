import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {

  @Input() scopes:any;

  @Input() isAfreximBg: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
