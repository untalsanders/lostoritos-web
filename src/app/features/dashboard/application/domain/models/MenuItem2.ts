import { SubMenuItem } from './SubMenuItem'

export interface MenuItem2 {
  group: string
  separator?: boolean
  selected?: boolean
  active?: boolean
  items: Array<SubMenuItem>
}
