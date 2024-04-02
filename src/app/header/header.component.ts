import { Component } from '@angular/core'
import { LogoSvgComponent } from '../logo-svg/logo-svg.component'
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [LogoSvgComponent, NavbarComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {}
