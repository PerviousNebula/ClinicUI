import { Component, OnInit } from '@angular/core';
import { TransactionType } from 'src/app/Core/enums';

import { Card, Transaction } from 'src/app/Core/models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  selectedTransaction: Transaction = null;
  cards: Card[] = [
    {
      id: new Date().getDate(),
      firstName: 'Andres',
      lastName: 'Nora',
      accountNumber: '**** **** 1106',
      balance: 240450,
    },
    {
      id: new Date().getDate(),
      firstName: 'Arturo',
      lastName: 'Nevarez',
      accountNumber: '**** **** 0666',
      balance: 1000000,
    },
    {
      id: new Date().getDate(),
      firstName: 'María',
      lastName: 'Villa',
      accountNumber: '**** **** 7770',
      balance: 250000000,
    },
  ]
  transactions: Transaction[] = [
    {
      id: new Date().getUTCMilliseconds(),
      date: new Date(2020, 3, 10),
      cashflow: 1840.20,
      items: [
        {
          id: new Date().getUTCMilliseconds(),
          icon: 'far fa-credit-card',
          title: 'Buying New Credit',
          type: TransactionType.Credit,
          date: new Date(2020, 3, 10),
          total: -1400.20,
        },
        {
          id: new Date().getUTCMilliseconds(),
          icon: 'fas fa-undo',
          title: 'Refund Credit',
          type: TransactionType.Refund,
          date: new Date(2020, 3, 11),
          total: 2820.50,
        }
      ],
    },
    {
      id: new Date().getUTCMilliseconds(),
      date: new Date(2020, 3, 15),
      cashflow: -2130.50,
      items: [
        {
          id: new Date().getUTCMilliseconds(),
          icon: 'fas fa-user-plus',
          title: 'Meeting Payment',
          type: TransactionType.Payment,
          date: new Date(2020, 3, 12),
          total: -450.15,
        },
      ],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showTransactionDetails(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

}
