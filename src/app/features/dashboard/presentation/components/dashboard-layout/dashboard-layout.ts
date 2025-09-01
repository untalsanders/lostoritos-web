import { Component } from '@angular/core'
import { DashboardFooter } from './components/dashboard-footer/dashboard-footer'
import { DashboardNavbar } from './components/dashboard-navbar/dashboard-navbar'
import { DashboardSidebar } from './components/dashboard-sidebar/dashboard-sidebar'

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [DashboardFooter, DashboardNavbar, DashboardSidebar],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {}
