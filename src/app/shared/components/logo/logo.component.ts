import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  imports: [NgOptimizedImage],
})
export class LogoComponent {}
