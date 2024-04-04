import { Component } from '@angular/core'
import { LogoComponent } from '../logo/logo.component'
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [LogoComponent, NavbarComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {}
