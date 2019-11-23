import { Component, OnInit } from '@angular/core';

import { Taolu } from '../taolu';
import { TaoluService } from '../taolu.service';

@Component({
  selector: 'app-taolu',
  templateUrl: './taolu.component.html',
  styleUrls: ['./taolu.component.css']
})
export class TaoluComponent implements OnInit {
  items: [];

  constructor(private taoluService: TaoluService) { }

  ngOnInit() {
    this.items = this.taoluService.getAll();
  }

}