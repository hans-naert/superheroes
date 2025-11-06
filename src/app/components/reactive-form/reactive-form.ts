import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})
export class ReactiveForm {
  protected superheroReactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.superheroReactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      details: [''],
      country: [''],
      specialPowers: [''],
      favFood: [''],
      cardImage: ['']
    });
  }

  submitSuperheroReactiveForm() {
    if (this.superheroReactiveForm.valid) {
      console.log('Reactive Form Data Submitted: ', this.superheroReactiveForm.value);
      this.superheroReactiveForm.reset();
    }
  }

}
