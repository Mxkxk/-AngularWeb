import { Component, OnInit } from '@angular/core';
import { Item, itemsConst } from '../shared/item';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items:Item[];

  constructor() {
    this.items = itemsConst;
  }

  ngOnInit(): void {
  }

}