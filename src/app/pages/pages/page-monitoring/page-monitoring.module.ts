import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMonitoringComponent } from './page-monitoring.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageMonitoringComponent,
  },
];

@NgModule({
  declarations: [PageMonitoringComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PageMonitoringModule {}
