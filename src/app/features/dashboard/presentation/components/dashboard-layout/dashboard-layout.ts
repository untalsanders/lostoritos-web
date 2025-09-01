import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { DashboardFooter } from './components/dashboard-footer/dashboard-footer'
import { DashboardNavbar } from './components/dashboard-navbar/dashboard-navbar'

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, DashboardFooter, DashboardNavbar],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {}
