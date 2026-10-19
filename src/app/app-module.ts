import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SuperheroesMaterialDesignModule } from './superheroes-material-design/superheroes-material-design-module';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveForm } from './reactive-form/reactive-form';

@NgModule({
  declarations: [App, TemplateDrivenForm, ReactiveForm],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    SuperheroesMaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
  bootstrap: [App],
})
export class AppModule {}
