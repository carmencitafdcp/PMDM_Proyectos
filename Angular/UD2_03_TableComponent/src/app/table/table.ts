import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Sexo = 'male' | 'female';

type Alumno = {
  nombre: string;
  apellidos: string;
  edad: number;
  curso: number;
  sexo: Sexo;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.css'],
})

export class Table {
  alumnos: Alumno[] = [
    { nombre: 'Carmen', apellidos: 'Fernández', edad: 22, curso: 2, sexo: 'female' },
    { nombre: 'Jorge', apellidos: 'Chacón', edad: 21, curso: 2, sexo: 'male' },
    { nombre: 'Ana', apellidos: 'Gómez', edad: 19, curso: 1, sexo: 'female' },
    { nombre: 'Nickita', apellidos: 'Diaz', edad: 21, curso: 2, sexo: 'female' },
  ];

  iconoSexo(sexo: Sexo) {
    return sexo === 'male' ? '🧔🏻' : '👧🏼';
  }

  claseIconoSexo(sexo: Sexo) {
    return sexo === 'male' ? 'sex-male' : 'sex-female';
  }

}

