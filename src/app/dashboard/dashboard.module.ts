import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      DashboardRoutingModule
    ],
    declarations: [DashboardComponent],
    providers: [DashboardService]
  })
  export class DashboardModule { }