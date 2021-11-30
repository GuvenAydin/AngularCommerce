import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/Entities/User';
import { CustomPasswordConfirm } from 'src/app/Helpers/CustomValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();

  registerForm: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //Register Form
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(150)]],
      lastName: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(150)]],
      phone:[null, [Validators.required,Validators.minLength(5),Validators.maxLength(150),Validators.pattern('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im')]],
      email: [null, [Validators.required, Validators.email,Validators.minLength(5),Validators.maxLength(250)]],
      password: [null, [Validators.required, Validators.minLength(6),Validators.minLength(6),Validators.maxLength(250)]],
      confirmPassword: [null,[Validators.required]],
   }, {
     //Custom validator
      validator: CustomPasswordConfirm('password', 'confirmPassword')
   });

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
 }

  onSubmit(){
   
  this.submitted = true;

  console.log(this.registerForm.controls.confirmPassword.errors)
  
      // stop here if form is invalid
      if (this.registerForm.invalid) {

          console.log("invalid")
         return;
      }


      

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

      this.submitted = false;
      this.registerForm.reset();
  }
 
}
