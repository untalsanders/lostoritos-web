import { SubMenuItem } from '@/app/features/dashboard/application/domain/models/SubMenuItem'
import { MenuService } from '@/app/features/dashboard/application/services/menu.services'
import { CommonModule, NgClass, NgTemplateOutlet } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-sidebar-menu',
  imports: [NgClass, SvgIconComponent, NgTemplateOutlet, RouterLink, CommonModule],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.css',
})
export class SidebarMenu {
  constructor(public readonly menuService: MenuService) {}

  toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu)
  }
}
