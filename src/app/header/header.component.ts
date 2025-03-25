import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
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
