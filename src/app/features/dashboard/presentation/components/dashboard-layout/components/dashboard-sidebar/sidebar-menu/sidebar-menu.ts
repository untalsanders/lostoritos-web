import { MenuItem } from '@/app/features/dashboard/application/domain/models/MenuItem'
import { MenuService } from '@/app/features/dashboard/application/services/menu.services'
import { CommonModule } from '@angular/common'
import { Component, inject, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-sidebar-menu',
  imports: [CommonModule, SvgIconComponent, RouterLink],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.css',
})
export class SidebarMenu {
  showSidebar = signal(true)
  menus = signal<MenuItem[]>([])

  private menuService = inject(MenuService)

  constructor() {
    this.menus.set(this.menuService.getItems())
  }

  toggelSidebar() {
    this.showSidebar.set(!this.showSidebar())
  }
}
