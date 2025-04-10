import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/@core/services/media.service';

@Component({
  selector: 'app-readaboutus',
  templateUrl: './readaboutus.component.html',
  styleUrls: ['./readaboutus.component.scss']
})
export class ReadaboutusComponent implements OnInit {

  medias:{img:string}[]=[];

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.medias = this.mediaService.media;
  }

}
