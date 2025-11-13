import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperheroDataService, Superhero } from '../../data-services/superhero-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})
export class ReactiveForm {
  protected superheroReactiveForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: SuperheroDataService,
    private router: Router
  ) {
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
      const formValue = this.superheroReactiveForm.value;
      console.log('Reactive Form Data Submitted: ', formValue);
      
      const hero: Superhero = {
        ...formValue,
        specialPowers: formValue.specialPowers ? [formValue.specialPowers] : [],
        favFood: formValue.favFood ? [formValue.favFood] : [],
        isExpanded: false
      };
      
      this.dataService.addSuperhero(hero).subscribe({
        next: (created) => {
          console.log('Hero created:', created);
          this.superheroReactiveForm.reset();
          this.router.navigate(['/heroes']);
        },
        error: (err) => {
          console.error('Failed to create hero:', err);
          alert('Failed to add superhero. Make sure mock API is running.');
        }
      });
    }
  }

}
