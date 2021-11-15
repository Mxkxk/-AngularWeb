import { Component, OnInit } from '@angular/core';
import { Item, itemsConst } from '../shared/item';
import { ItemdetailComponent, itemdetailConst } from '../itemdetail/itemdetail.component';
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