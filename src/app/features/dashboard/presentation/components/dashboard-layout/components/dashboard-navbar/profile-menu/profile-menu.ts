import { ThemeService } from '@/app/core/services/theme.service'
import { NgClass } from '@angular/common'
import { Component, inject, signal } from '@angular/core'
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faGear, faMoon, faSignOut, faSun, faUserCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-profile-menu',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './profile-menu.html',
  styleUrl: './profile-menu.css',
})
export class ProfileMenu {
  isOpen = signal(false)
  themeMode = ['light', 'dark']
  themeService = inject(ThemeService)

  constructor(library: FaIconLibrary) {
    library.addIcons(faUserCircle, faGear, faSignOut, faSun, faMoon)
  }

  toggleThemeMode() {
    this.themeService.theme.update(theme => {
      const mode = !this.themeService.isDark ? 'dark' : 'light'
      return { ...theme, mode: mode }
    })
  }

  toggleMenu(): void {
    this.isOpen.update(isOpen => !isOpen)
  }
}
