import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/Core/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() active = true;
  @Input() info: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
