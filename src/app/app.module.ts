import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Model1Component } from './models/model1/model1.component';
import { Model2Component } from './models/model2/model2.component';
import { Sandbox1Component } from './sandbox/sandbox1/sandbox1.component';
import { Model3Component } from './models/model3/model3.component';
import { Model4Component } from './models/model4/model4.component';

@NgModule({
  declarations: [
    AppComponent,
    Model1Component,
    Model2Component,
    Sandbox1Component,
    Model3Component,
    Model4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
