import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { AngularEmailEditorModule } from '@fractalframing/angular-email-editor';

import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    AngularEmailEditorModule
  ]
})
export class ExampleModule { }
