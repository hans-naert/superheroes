import { Component, Input, Output, EventEmitter } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'app-superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers: [SuperheroText]
})
export class SuperheroProfileComponent {

  cssClasses: {[key: string]: boolean} = {
    "colorful":false}

  @Input()
  name="";

  @Output() fly = new EventEmitter<String>();

  fly_func(str: String)
  {
    this.fly.emit(str);
    this.cssClasses["colorful"]=true;
  }

}
