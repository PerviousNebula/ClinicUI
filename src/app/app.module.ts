import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

// Routes
import { AppRoutes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard.component';

// Local Modules
import { SharedModule } from './Shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
