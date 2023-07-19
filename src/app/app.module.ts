import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Model1Component } from './models/model1/model1.component';
import { Model2Component } from './models/model2/model2.component';
import { Sandbox1Component } from './sandbox/sandbox1/sandbox1.component';
import { Model3Component } from './models/model3/model3.component';
import { Model4Component } from './models/model4/model4.component';
import { Model5Component } from './models/model5/model5.component';
import { Model6Component } from './models/model6/model6.component';
import { Model7Component } from './models/model7/model7.component';
import { Model8Component } from './models/model8/model8.component';

@NgModule({
  declarations: [
    AppComponent,
    Model1Component,
    Model2Component,
    Sandbox1Component,
    Model3Component,
    Model4Component,
    Model5Component,
    Model6Component,
    Model7Component,
    Model8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
