import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AngularSvgIconModule } from 'angular-svg-icon'

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NgOptimizedImage, AngularSvgIconModule, RouterLink],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  year = new Date().getFullYear()
}
