import { Component, Input, OnInit } from '@angular/core';
import { Subscription }      from 'rxjs';
import { HomeTwoComponent }  from '../home-two.component';
import { HomeTwoService }    from '../home-two.service';
import { DomSanitizer, SafeHtml }          from '@angular/platform-browser';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls:  ['./contact.component.scss']
})
export class ContactComponent implements OnInit{ 
  
  @Input('backgroundGray') public backgroundGray;
  galleryId = 'myLightbox';
  subscription: Subscription;
  items: GalleryItem[];
  safeHtml: SafeHtml;

  constructor(public gallery: Gallery,
              private sanitizer: DomSanitizer,
              private homeTwoService: HomeTwoService) {
    //  annotate
    this.subscription = homeTwoService.textGetter.subscribe(pageData => {
          //  annotate
          this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(pageData['html']);
          //  anotate
          this.items    = pageData['imgs'].map(item =>
            new ImageItem({ src: item.src, thumb: item.thumb }));
          //  anotate
          this.gallery.ref().load(this.items);
    });
  }

  ngOnInit() { }

}
