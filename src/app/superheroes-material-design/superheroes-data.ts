import { Service } from '@angular/core';
import { Superhero } from './superhero-profile/superhero-profile';

@Service()
export class SuperheroesData {

getSuperheroes(): Superhero[] {
  return [
    { name: 'Superman', firstAppearance: 1938, livesIn: 'Metropolis' },
    { name: 'Batman', firstAppearance: 1939, livesIn: 'Gotham City' },
    { name: 'Wonder Woman', firstAppearance: 1941, livesIn: 'Themyscira' },
    { name: 'Spider-Man', firstAppearance: 1962, livesIn: 'New York City' },
    { name: 'Iron Man', firstAppearance: 1963, livesIn: 'New York City' },
    { name: 'Captain America', firstAppearance: 1941, livesIn: 'Brooklyn' },
    { name: 'Thor', firstAppearance: 1962, livesIn: 'Asgard' },
    { name: 'Hulk', firstAppearance: 1962, livesIn: 'New York City' },
    { name: 'Black Widow', firstAppearance: 1964, livesIn: 'New York City' },
  ];
}
}
    