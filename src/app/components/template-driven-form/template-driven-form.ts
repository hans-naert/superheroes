import { Component } from '@angular/core';
import { SuperheroDataService, Superhero } from '../../data-services/superhero-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss'
})
export class TemplateDrivenForm {
  constructor(
    private dataService: SuperheroDataService,
    private router: Router
  ) {}

  submitSuperheroForm(formData: any) {
    console.log('Template-Driven Form Data Submitted: ', formData);
    
    const hero: Superhero = {
      ...formData,
      specialPowers: formData.specialPowers ? [formData.specialPowers] : [],
      favFood: formData.favFood ? [formData.favFood] : [],
      isExpanded: false
    };
    
    this.dataService.addSuperhero(hero).subscribe({
      next: (created) => {
        console.log('Hero created:', created);
        this.router.navigate(['/heroes']);
      },
      error: (err) => {
        console.error('Failed to create hero:', err);
        alert('Failed to add superhero. Make sure mock API is running.');
      }
    });
  }

}
