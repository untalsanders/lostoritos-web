import { AuthService } from '@/app/features/auth/application/services/auth.service'
import { Component, inject } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { LogoComponent } from '../logo/logo.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private _authService = inject(AuthService)
  private router = inject(Router)

  async logout() {
    await this._authService.logout()
    this.router.navigateByUrl('/')
  }

  toggleMenu() {
    const menu = document.querySelector('.header__nav')
    menu?.classList.toggle('header__nav--active')

    const menuItem = document.querySelectorAll('.header__nav-item')
    menuItem.forEach(item => {
      item.addEventListener('click', () => {
        menu?.classList.remove('header__nav--active')
      })
    })
  }
}
