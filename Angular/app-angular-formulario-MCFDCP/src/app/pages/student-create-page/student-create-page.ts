import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-create-page',
  imports: [],
  templateUrl: './student-create-page.html',
  styleUrl: './student-create-page.css',
})
export class StudentCreatePage {
  studentFormGroup = new FormGroup({
    sudentNameFormControl: new FormControl(''),
    studentNumberFormControl: new FormControl(''),
    studentSurnameFormControl: new FormControl(''),
    studentNIFFormControl: new FormControl(''),
    studentAgeFormControl: new FormControl(''),
    studentCourseFormControl: new FormControl('', Validators.required),
  }); 

  opcionesCourses = [
    { valor: 'primero', texto: '1ºDAM' },
    { valor: 'segundo', texto: '2ºDAM' },
  ];

  onCreateClicked (){
    console.log('** Form control inputs **');
    console.log('Name:', this.studentFormGroup.get('studentNameFormControl')?.value);
    console.log('Surname:', this.studentFormGroup.get('studentSurnameFormControl')?.value);
    console.log('Number:', this.studentFormGroup.get('studentNumberFormControl')?.value);
    console.log('NIF:', this.studentFormGroup.get('studentNIFFormControl')?.value);
    console.log('Age:', this.studentFormGroup.get('studentAgeFormControl')?.value);
    console.log(' Course  :', this.studentFormGroup.get('studentCourseFormControl')?.value);
    console.log(this.studentFormGroup.value);
  }
}
