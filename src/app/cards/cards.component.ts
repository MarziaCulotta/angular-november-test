import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'angtest-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() products!: Product[];
  @Output() showDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
