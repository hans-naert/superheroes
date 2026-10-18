import { Service } from '@angular/core';
import { Superhero } from './superhero-profile/superhero-profile';

@Service()
export class SuperheroData {
    getSuperheroes(): Superhero[] {
        const superheroes: Superhero[] = [
            { name: 'Superman', firstAppearance: 1938, livesIn: 'Metropolis' },
            { name: 'Batman', firstAppearance: 1939, livesIn: 'Gotham City' },
            { name: 'Wonder Woman', firstAppearance: 1941, livesIn: 'Themyscira' },
            { name: 'Spider-Man', firstAppearance: 1962, livesIn: 'New York City' },
        ];
        return superheroes;
    }
}
