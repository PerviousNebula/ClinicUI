import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Transaction } from 'src/app/Core/models';

@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.scss']
})
export class LastTransactionsComponent implements OnInit {
  @Input() transaction: Transaction;
  @Output() transactionSelected: EventEmitter<Transaction> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  selectTransaction(event: Event, tr: Transaction): void {
    const elem = event.target as HTMLElement;
    if (elem.classList.contains('dropdown-toggle') || elem.classList.contains('fa-ellipsis-v')) {
      return;
    }

    this.transactionSelected.emit(tr);
  }

}
