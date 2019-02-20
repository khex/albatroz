import { Component, OnInit, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // https://murhafsousli.github.io/ngx-gallery/#/lightbox
  data = [
    { srce: 'medium/mag-1-md.jpg', thmb: 'thumbs/mag-1-thumb.jpg'},
    { srce: 'medium/mag-2-md.jpg', thmb: 'thumbs/mag-2-thumb.jpg'},
    { srce: 'medium/mag-3-md.jpg', thmb: 'thumbs/mag-3-thumb.jpg'},
    { srce: 'medium/mag-4-md.jpg', thmb: 'thumbs/mag-4-thumb.jpg'},
    { srce: 'medium/mag-5-md.jpg', thmb: 'thumbs/mag-5-thumb.jpg'},
    { srce: 'medium/mag-6-md.jpg', thmb: 'thumbs/mag-6-thumb.jpg'}
  ];

  @Input('backgroundGray') public backgroundGray;
  galleryId = 'myLightbox';

  // Map the data to gallery image items
  items: GalleryItem[] = this.data.map(item =>
    new ImageItem({
      src:   'assets/images/' + item.srce,
      thumb: 'assets/images/' + item.thmb })
  );

  constructor(public gallery: Gallery) { }

  ngOnInit() {
    // Set gallery items array
    this.gallery.ref().load(this.items);
  }

}
