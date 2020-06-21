import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) {

   }

  ngOnInit(): void {
  }

  // profileForm = new FormGroup({
  //   firstName : new FormControl('', Validators.required),
  //   lastName : new FormControl('', Validators.required),
  //   address : new FormGroup({
  //     street : new FormControl('', Validators.required),
  //     city : new FormControl(''),
  //     zip : new FormControl(''),
  //     country : new FormControl('')
  //   })
  // });

  profileForm = this.formBuilder.group({
    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    address : this.formBuilder.group({
      street : ['',Validators.required],
      city : [''],
      zip : [''],
      country : ['']
    })
  });

  onSubmit(){
    console.log(this.profileForm);
    console.log(this.profileForm.value);
  }

}
