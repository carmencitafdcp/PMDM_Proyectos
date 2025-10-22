import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  imports: [],
  templateUrl: './datos.html',
  styleUrl: './datos.css'
})
export class Datos {
  nombre = "Miguel";
  titulo = "Bienvenido";
  colorTexto = 'black';
  luzEncendida = false;
  progreso = 0;

  cambiarTitulo() {
    this.titulo = '¡Título cambiado!';
  }

  cambiarColor() {
    this.colorTexto = this.colorTexto === 'black' ? 'red' : 'black';
  }

  encenderLuz() {
    this.luzEncendida = !this.luzEncendida;
  }

  incrementar() {
    if (this.progreso < 100) {
      this.progreso += 10;
    }
  }

  decrementar() {
    if (this.progreso > 0) {
      this.progreso -= 10;
    }
  }
}


