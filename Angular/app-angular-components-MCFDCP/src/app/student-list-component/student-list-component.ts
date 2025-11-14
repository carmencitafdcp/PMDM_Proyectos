import { Component, input } from '@angular/core';

@Component({
  selector: 'app-student-list-component',
  imports: [],
  templateUrl: './student-list-component.html',
  styleUrl: './student-list-component.css',
})
export class StudentListComponent {
  studentName = input('');
  studentNumber = input<number>();
  studentSurname = input('');
  studentNIF = input('');
  studentAge = input<number>();
  studentCourse = input('');
}
