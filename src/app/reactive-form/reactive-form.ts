import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  styleUrl: './reactive-form.scss',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {

  fb = inject(FormBuilder);
  
  form = this.fb.group({
    name: [''],
    email: [''],
  });
  
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
