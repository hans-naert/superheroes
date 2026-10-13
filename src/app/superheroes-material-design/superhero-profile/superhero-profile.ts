import { Component, Input } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  standalone: false,
  styleUrl: './superhero-profile.scss',
  templateUrl: './superhero-profile.html',
  providers: [SuperheroText]
})
export class SuperheroProfile {
  @Input() name: string = '';
  @Input() firstAppearance: string = '';
  @Input("lives-in") livesIn: string = '';
}
