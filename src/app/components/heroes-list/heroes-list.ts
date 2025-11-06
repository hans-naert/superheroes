import { Component, signal } from '@angular/core';
import { SuperheroDataService, Superhero } from '../../data-services/superhero-data-service';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.scss'
})
export class HeroesList {
  protected readonly heroes = signal<Superhero[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  constructor(private data: SuperheroDataService) {
    this.data.getSuperheroes().subscribe({
      next: list => {
        this.heroes.set(list);
        this.loading.set(false);
      },
      error: err => {
        this.error.set('Failed to load heroes');
        console.error(err);
        this.loading.set(false);
      }
    });
  }

  trackByName(index: number, hero: Superhero) { return hero.name; }
}
