import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { DashboardFooter } from './components/dashboard-footer/dashboard-footer'

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, DashboardFooter],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {}
