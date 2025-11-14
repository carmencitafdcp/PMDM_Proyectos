import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-create-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-create-page.html',
  styleUrl: './student-create-page.css',
})
export class StudentCreatePage {
  studentFormGroup = new FormGroup({
    studentNameFormControl: new FormControl('', Validators.required),
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

  // Small helpers so template can reference controls directly (avoids template type errors)
  get studentNameFormControl(): FormControl | null {
    return this.studentFormGroup.get('studentNameFormControl') as FormControl | null;
  }

  get studentSurnameFormControl(): FormControl | null {
    return this.studentFormGroup.get('studentSurnameFormControl') as FormControl | null;
  }

  get studentNumberFormControl(): FormControl | null {
    return this.studentFormGroup.get('studentNumberFormControl') as FormControl | null;
  }

  get studentCourseFormControl(): FormControl | null {
    return this.studentFormGroup.get('studentCourseFormControl') as FormControl | null;
  }
}
