import { Component, Input, OnInit } from '@angular/core';
import { Subscription }      from 'rxjs';
import { ActivatedRoute }    from '@angular/router';
import { HomeTwoComponent }  from '../home-two.component';
import { HomeService }       from '../home.service';

import {
  Gallery,
  GalleryItem,
  ImageItem }                from '@ngx-gallery/core';

@Component({
  selector:    'app-contact',
  templateUrl: './contact.component.html',
  styles: [`
  .images {
    margin: 20px;
  }
  `]
})
export class ContactComponent implements OnInit{ 
  
  @Input('backgroundGray') public backgroundGray;
  galleryId = 'myLightbox';
  subscription: Subscription;
  s2: Subscription;
  items: GalleryItem[];
  pd = {h2: '', p1: '', p2: ''};
  link;

  constructor(public gallery: Gallery,
              private router: ActivatedRoute,
              private homeService: HomeService) {
    //  annotate
    this.subscription = homeService.textGetter.subscribe(pageData => {
      //  annotate
      this.pd = pageData['html'];   
      //  anotate
      this.items    = pageData['imgs'].map(item =>
        new ImageItem({ src: item.src, thumb: item.thumb })
      );
      //  anotate
      this.gallery.ref().load(this.items);
    });

    this.s2 = this.router.url.subscribe(url => {
      this.link = url;
    });

  }

  ngOnInit() { }

}
