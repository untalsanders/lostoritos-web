import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { DashboardFooter } from './components/dashboard-footer/dashboard-footer'
import { ProfileMenu } from './components/dashboard-navbar/profile-menu/profile-menu'

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, DashboardFooter, ProfileMenu],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {}
