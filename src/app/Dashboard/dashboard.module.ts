import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

// Routes
import { DashboardRoutes } from './dashboard.routes';

// Components
import { CardsComponent } from './pages/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { LastTransactionsComponent } from './components/last-transactions/last-transactions.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    LastTransactionsComponent,
    PaymentDetailComponent,
  ],
  imports: [
    ChartsModule,
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
  ]
})
export class DashboardModule { }
