import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroesMaterialDesignModule } from './superheroes-material-design/superheroes-material-design.module';

import {SuperheroDataService} from './data-services/superhero-data.service';
import { AppHttpCallsModule } from './app-http-calls/app-http-calls.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SuperheroesMaterialDesignModule,
    AppHttpCallsModule
  ],
  providers: [SuperheroDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
