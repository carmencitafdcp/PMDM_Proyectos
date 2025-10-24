import { Component } from '@angular/core';

type tarea = {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

export class TaskList {
  tasks: tarea[] = [
    { title: 'Hacer la compra', done: false },
    { title: 'Estudiar Angular', done: true },
    { title: 'Pasear al perro', done: false },
    { title: 'Regar plantas', done: false },
  ];

  cambiarEstado(task: any) {
    task.done = !task.done; //Si antes era true ahora será false y viceversa
  }
}
