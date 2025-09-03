import { MenuItem } from './MenuItem'

export class Menu {
  private group?: string
  public items?: Array<MenuItem>

  getGroup() {
    return this.group
  }

  setGroup(value: string) {
    this.group = value
  }

  addItem(item: MenuItem) {
    this.items?.push(item)
  }

  getItem(item: string) {
    return this.items
  }
}
