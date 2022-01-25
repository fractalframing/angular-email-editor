import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularEmailEditorModule } from '@fractalframing/angular-email-editor';

import { DashboardComponent } from './dashboard.component';
import { DesignListComponent } from './design-list/design-list.component';
import { DesignEditComponent } from './design-edit/design-edit.component';

@NgModule({
  declarations: [DashboardComponent, DesignListComponent, DesignEditComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularEmailEditorModule
  ]
})
export class DashboardModule { }
