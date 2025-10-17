import { Component } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  standalone: false,
  //template: `
 // <div>test superhero profile works!</div>
 // `,
  templateUrl: './superhero-profile.html',
  styleUrl: './superhero-profile.scss',
  viewProviders: [SuperheroText]
})
export class SuperheroProfile {

}
