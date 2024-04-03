import { Component } from '@angular/core'
import { LogoSvgComponent } from '../logo-svg/logo-svg.component'

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [LogoSvgComponent],
    templateUrl: './logo.component.html',
    styleUrl: './logo.component.css',
})
export class LogoComponent {}
