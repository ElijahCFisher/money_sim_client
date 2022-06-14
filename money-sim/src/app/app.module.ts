import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftScenarioComponent } from './left-scenario/left-scenario.component';
import { GraphComponent } from './graph/graph.component';
import { RightScenarioComponent } from './right-scenario/right-scenario.component';
import { FunctionComponent } from './function/function.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftScenarioComponent,
    GraphComponent,
    RightScenarioComponent,
    FunctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
