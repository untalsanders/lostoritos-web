import { MenuService } from '@/app/features/dashboard/application/services/menu.services'
import { NgClass, NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { SvgIconComponent } from 'angular-svg-icon'
import { SidebarMenu } from './sidebar-menu/sidebar-menu'

@Component({
  selector: 'app-dashboard-sidebar',
  imports: [NgOptimizedImage, SvgIconComponent, NgClass, SidebarMenu],
  templateUrl: './dashboard-sidebar.html',
  styleUrl: './dashboard-sidebar.css',
})
export class DashboardSidebar {
  constructor(public readonly menuService: MenuService) {}

  toggleSidebar() {
    this.menuService.toggleSidebar()
  }
}
