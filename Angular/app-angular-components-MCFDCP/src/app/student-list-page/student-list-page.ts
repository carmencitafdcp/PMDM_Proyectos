import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/students-list-responde.interface';
import { StudentListComponent } from '../student-list-component/student-list-component';

@Component({
  selector: 'app-student-list-page',
  standalone: true,
  imports: [StudentListComponent],
  templateUrl: './student-list-page.html',
  styleUrl: './student-list-page.css',
})
export class StudentListPage {
  students: Student[] = [{
    numero: 1,
    nombre: 'Carmen',
    apellidos: 'Fernández',
    nif: '12345678A',
    edad: 22,
    curso: '2ºDAM',
    id: undefined
  }];
}