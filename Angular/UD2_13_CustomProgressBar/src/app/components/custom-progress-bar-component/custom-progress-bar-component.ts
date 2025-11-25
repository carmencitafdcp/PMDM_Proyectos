import { Component, Input } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-progress-bar',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './custom-progress-bar-component.html',
  styleUrls: ['./custom-progress-bar-component.css']
})
export class CustomProgressBarComponent {
  @Input() value: number = 50;
  @Input() color: string = 'primary';
  @Input() striped: boolean = false;
  @Input() animated: boolean = true;
  @Input() showValue: boolean = true;
}
