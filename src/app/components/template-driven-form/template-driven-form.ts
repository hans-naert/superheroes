import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss'
})
export class TemplateDrivenForm {
  submitSuperheroForm(formData: any) {
    console.log('Template-Driven Form Data Submitted: ', formData);
  }

}
