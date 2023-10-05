import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroesMaterialDesignModule } from './superheroes-material-design/superheroes-material-design.module';

import {SuperheroDataService} from './data-services/superhero-data.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SuperheroesMaterialDesignModule
  ],
  providers: [SuperheroDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
