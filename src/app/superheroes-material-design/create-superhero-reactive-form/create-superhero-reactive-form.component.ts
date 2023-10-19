import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup,Validators } from "@angular/forms"

@Component({
  selector: 'app-create-superhero-reactive-form',
  templateUrl: './create-superhero-reactive-form.component.html',
  styleUrls: ['./create-superhero-reactive-form.component.css']
})
export class CreateSuperheroReactiveFormComponent {
  
  superheroFormGroup: FormGroup;

  // Create an instance of FormControl using the FormBuilder
  name: FormControl = this.fb.control("");

  // Inject FormBuilder
  constructor(private fb: FormBuilder) { 
    this.superheroFormGroup = this.fb.group({
      name: ['',[Validators.required]],
      country:''
    })
  }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(result => console.log(result));
     setTimeout( () => this.name.setValue("Value set on timeout"), 1000);
  }

  changeHandler()
  {
    console.log(`Pressed on enter, value is ${this.name.value}`)
  }

  submitHandler()
  {
    let superheroNameCountry = this.superheroFormGroup.value as SuperheroNameCountry;
    console.log(`Formgroup name: ${superheroNameCountry.name} country: ${superheroNameCountry.country}`)
  }

}

class SuperheroNameCountry
{
  name='';
  country='';
}