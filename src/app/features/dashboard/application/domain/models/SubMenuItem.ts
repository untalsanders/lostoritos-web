export interface SubMenuItem {
  icon?: string
  label?: string
  route?: string | null
  expanded?: boolean
  active?: boolean
  children?: Array<SubMenuItem>
}