import { AuthService } from '@/app/features/auth/application/services/auth.service'
import { NgOptimizedImage } from '@angular/common'
import { Component, inject, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router)
  private authService = inject(AuthService)
  isAuthenticated = signal<boolean>(false)

  async logout() {
    await this.authService.logout()
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
