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
        const menu = document.getElementById('menu')
        menu?.classList.toggle('hidden')
    }
}
