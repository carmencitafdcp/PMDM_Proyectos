import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form-page.html',
  styleUrl: './register-form-page.css',
})
export class RegisterFormPage {
  registerFormGroup = new FormGroup({
    nameFormControl: new FormControl(''),
    surnameFormControl: new FormControl(''),
    NIFFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
    phoneFormControl: new FormControl(''),
    genderFormControl: new FormControl(''),
    conocidoPorFormControl: new FormControl('', Validators.required),
    passwordFormControl: new FormControl(''),
    confirmPasswordFormControl: new FormControl(''),
  });

  opcionesConocimiento = [
    { valor: 'google', texto: 'Google' },
    { valor: 'amigo', texto: 'A través de un amigo' },
    { valor: 'profesor', texto: 'A través del profesor' },
    { valor: 'redes', texto: 'Redes sociales' },
    { valor: 'publicidad', texto: 'Publicidad' },
    { valor: 'otro', texto: 'Otro' }
  ];

  onRegsiterClicked (){
    console.log('** Form control inputs **');
    console.log('Name:', this.registerFormGroup.get('nameFormControl')?.value);
    console.log('Surname:', this.registerFormGroup.get('surnameFormControl')?.value);
    console.log('NIF:', this.registerFormGroup.get('NIFFormControl')?.value);
    console.log('Email:', this.registerFormGroup.get('emailFormControl')?.value);
    console.log('Phone:', this.registerFormGroup.get('phoneFormControl')?.value);
    console.log(' Gender  :', this.registerFormGroup.get('genderFormControl')?.value);
    console.log('Known by:', this.registerFormGroup.get('conocidoPorFormControl')?.value);
    console.log('Password:', this.registerFormGroup.get('passwordFormControl')?.value);
    console.log('Confirm Password:', this.registerFormGroup.get('confirmPasswordFormControl')?.value);

    console.log('** Form Group Value **');
    console.log(this.registerFormGroup.value);
  }

  clearForm() {
    this.registerFormGroup.reset();
  }
}
