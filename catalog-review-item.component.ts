import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-review-item',
  templateUrl: './catalog-review-item.component.html',
  styleUrls: ['./catalog-review-item.component.scss'],
})
export class CatalogReviewItemComponent implements OnInit {

  @Input() reviewItem;
  
  constructor() { }

  ngOnInit() {}

}
