import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ButtonComponent {

}
