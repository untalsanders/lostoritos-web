import { SubMenuItem } from './SubMenuItem'

export interface MenuItem {
  group: string
  separator?: boolean
  selected?: boolean
  active?: boolean
  items: Array<SubMenuItem>
}
