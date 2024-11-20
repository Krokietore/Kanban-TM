import {ChangeDetectionStrategy, Component, OnInit, Renderer2, signal, WritableSignal} from '@angular/core';
import {THEMES} from '../../../shared/enums/themes.enum';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'theme-switcher',
  imports: [
    MatIcon
  ],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcherComponent implements OnInit {
  theme: WritableSignal<THEMES> = signal(THEMES.LIGHT)

  constructor(
    private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.renderer.setAttribute(document.firstElementChild, 'color-scheme', this.theme());
  }

  changeTheme(): void {
    const newTheme: THEMES = this.theme() === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    this.theme.set(newTheme);
    this.renderer.setAttribute(document.firstElementChild, 'color-scheme', this.theme());
  }
}
