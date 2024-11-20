import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeSwitcherComponent} from './core/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'Kanban-TM';
}
