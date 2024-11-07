import { Component } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrl: './superhero-profile.component.scss',
  providers: [SuperheroText]
})
export class SuperheroProfileComponent {

}
