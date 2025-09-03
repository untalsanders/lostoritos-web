import { Component, signal } from '@angular/core'
import { SidebarHeader } from './sidebar-header/sidebar-header'
import { SidebarMenu } from './sidebar-menu/sidebar-menu'

@Component({
  selector: 'app-dashboard-sidebar',
  imports: [SidebarHeader, SidebarMenu],
  templateUrl: './dashboard-sidebar.html',
  styleUrl: './dashboard-sidebar.css',
})
export class DashboardSidebar {
  showSidebar = signal(true)

  toggleSidebar() {
    this.showSidebar.set(!this.showSidebar())
  }
}
