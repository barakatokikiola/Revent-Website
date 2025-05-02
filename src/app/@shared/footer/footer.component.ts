import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/@core/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer: {title:string, point: string[], icon: string[]}[] = [];

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footer = this.footerService.footer_list;
  }

}
