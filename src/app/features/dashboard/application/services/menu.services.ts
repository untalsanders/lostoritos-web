import { Injectable, signal } from '@angular/core'
import { MenuItem } from '../domain/models/MenuItem'
import { SubMenuItem } from '../domain/models/SubMenuItem'
import { Menu } from '@/app/features/dashboard/application/constants/menu'

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _showSidebar = signal(true)
  private _menuItems = signal<MenuItem[]>([])

  constructor() {
    this._menuItems.set(Menu.items)
  }

  get showSidebar() {
    return this._showSidebar()
  }

  set showSidebar(value: boolean) {
    this._showSidebar.set(value)
  }

  get menuItems() {
    return this._menuItems()
  }

  toggleSidebar() {
    this._showSidebar.set(!this._showSidebar())
  }

  toggleMenu(menu: SubMenuItem) {
    this.showSidebar = true
  }
}
