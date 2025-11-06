import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { Demo } from './components/demo/demo';

const routes: Routes = [
  { path: 'template-form', component: TemplateDrivenForm },
  { path: 'reactive-form', component: ReactiveForm },
  { path: 'demo', component: Demo },
  { path: '', redirectTo: '/template-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
