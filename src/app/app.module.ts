import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankAccountInfoComponent } from './dashboard/components/bank-account-info/bank-account-info.component';
import { SidebarMenuComponent } from './dashboard/components/sidebar-menu/sidebar-menu.component';
import { MonthlyStatsComponent } from './dashboard/components/monthly-stats/monthly-stats.component';
import { ReportCardComponent } from './dashboard/components/report-card/report-card.component';
import { GroupedBarGraphComponent } from './dashboard/components/grouped-bar-graph/grouped-bar-graph.component';
import { TransactionHistoryComponent } from './dashboard/components/transaction-history/transaction-history.component';
import { TransactionHistoryItemComponent } from './dashboard/components/transaction-history-item/transaction-history-item.component';
// import randomcolor  from 'randomcolor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BankAccountInfoComponent,
    SidebarMenuComponent,
    MonthlyStatsComponent,
    ReportCardComponent,
    GroupedBarGraphComponent,
    TransactionHistoryComponent,
    TransactionHistoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
