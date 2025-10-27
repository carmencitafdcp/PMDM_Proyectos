import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  pantalla = '0';
  operador: string = '';
  primerNum: number = 0;

  mostrarNum(num: string) {
    if (this.pantalla === '0') {
      this.pantalla = num;
    } else {
      this.pantalla += num;
    }
  }

  operar(seleccion: string) {
    this.primerNum = Number(this.pantalla);
    this.operador = seleccion;
    this.pantalla = '0';
  }

  calcular() {
    const segundoNum = Number(this.pantalla);
    if (this.operador === '+') {
      this.pantalla = String(this.primerNum + segundoNum)
    } else if (this.operador === '-') {
      this.pantalla = String(this.primerNum - segundoNum)
    }
    this.operador = '';
  }
}
