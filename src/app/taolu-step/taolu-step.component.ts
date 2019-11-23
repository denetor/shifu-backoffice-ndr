import { Component, OnInit } from '@angular/core';

import { TaoluStep } from '../taolu-step';
import { TaoluStepService } from '../taolu-step.service';

@Component({
  selector: 'app-taolu-step',
  templateUrl: './taolu-step.component.html',
  styleUrls: ['./taolu-step.component.css']
})
export class TaoluStepComponent implements OnInit {
  items: TaoluStep[];

  constructor(private taoluStepService: TaoluStepService) { }

  ngOnInit() {
    this.items = this.taoluStepService.getAll();
  }

}