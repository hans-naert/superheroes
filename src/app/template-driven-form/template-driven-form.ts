import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  styleUrl: './template-driven-form.scss',
  templateUrl: './template-driven-form.html',
})
export class TemplateDrivenForm {

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid');
    }
}
}
