import { Component } from '@angular/core'
import { LogoSvgComponent } from '../logo-svg/logo-svg.component'
import { NgOptimizedImage } from '@angular/common'

@Component({
    selector: 'app-logo',
    standalone: true,
    templateUrl: './logo.component.html',
    styleUrl: './logo.component.css',
    imports: [LogoSvgComponent, NgOptimizedImage],
})
export class LogoComponent {}
