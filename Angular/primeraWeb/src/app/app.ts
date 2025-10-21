import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from "./tarjeta/tarjeta";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primeraWeb');
}
