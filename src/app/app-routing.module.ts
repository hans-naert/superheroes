import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSuperheroComponent } from './superheroes-material-design/create-superhero/create-superhero.component';
import { HomeComponent } from './superheroes-material-design/home/home.component';

const routes: Routes = [
  {
    path:"create-hero",
    component:CreateSuperheroComponent
  }
,
{
  path:"home",
  component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
