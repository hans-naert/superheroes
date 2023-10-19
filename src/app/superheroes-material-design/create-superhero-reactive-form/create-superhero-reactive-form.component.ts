import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup,Validators, FormArray } from "@angular/forms"

@Component({
  selector: 'app-create-superhero-reactive-form',
  templateUrl: './create-superhero-reactive-form.component.html',
  styleUrls: ['./create-superhero-reactive-form.component.css']
})
export class CreateSuperheroReactiveFormComponent {
  
  superheroFormGroup: FormGroup;

  // Create an instance of FormControl using the FormBuilder
  name: FormControl = this.fb.control("");

  countries=[
    { 
      name:"België",
      selectedByDefault:true
    }, { 
      name:"Nederland",
      selectedByDefault:false
    }, ]

    // Inject FormBuilder
  constructor(private fb: FormBuilder) { 

    let j=this.countries.map( i => new FormControl(i.selectedByDefault))

    this.superheroFormGroup = new FormGroup({
      name: new FormControl('',Validators.required),
      countriescontrols: new FormArray(j)
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