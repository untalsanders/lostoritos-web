import { effect, Injectable, signal } from '@angular/core'

interface Theme {
  mode: string
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<Theme>({ mode: 'light' })

  constructor() {
    this.loadTheme()
    effect(() => {
      this.setConfig()
    })
  }

  public get isDark(): boolean {
    return this.theme().mode == 'dark'
  }

  private loadTheme() {
    const theme = localStorage.getItem('theme')
    if (theme) {
      this.theme.set(JSON.parse(theme))
    }
  }

  private setConfig() {
    this.setLocalStorage()
    this.setThemeClass()
  }

  private setThemeClass() {
    document.querySelector('html')!.className = this.theme().mode
  }

  private setLocalStorage() {
    localStorage.setItem('theme', JSON.stringify(this.theme()))
  }
}
