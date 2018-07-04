import { SharedModule } from './../shared/shared.module';
import { AboutRoutingModule } from './about.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutComponent, TemplateDrivenFormComponent, ReactiveFormComponent } from './index';

@NgModule({
  declarations: [
    AboutComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule {

}
