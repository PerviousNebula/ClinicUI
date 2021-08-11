import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { Transaction } from 'src/app/Core/models';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {
  public barChartLabels: Label[] = ['Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
  public barChartData: ChartDataSets[] = [{ data: [65, 59, 80, 81, 56, 70] }];
  public colors: Color[] = [{ backgroundColor: '#50449c' }];
  public chartOptions: ChartOptions = {
    scales: {
      xAxes: [{ gridLines: { display: false } }],
      yAxes: [{ gridLines: { display: false } }],
    }
  };

  @Input() transaction: Transaction = null;
  @Output() closePaymentDetail: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.closePaymentDetail.emit(true);
  }

}
