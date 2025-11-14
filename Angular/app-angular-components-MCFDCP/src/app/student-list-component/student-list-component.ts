import { Component, Input, input } from '@angular/core';
import { Student } from '../interface/students-list-responde.interface';

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
  @Input() students: Student[] = [];
  
  verDetalle(student: Student) {
    alert(`Se ha pulsado en el alumno ${student.nombre} ${student.apellidos}`);
  }
}

