export class MenuItem {
  private _group?: string
  private _items?: Array<MenuItem>
  private _separator?: boolean
  private _selected?: boolean
  private _active?: boolean
  private _icon?: string
  private _label: string | undefined
  private _route: string | undefined

  get group() {
    return this._group
  }

  get items() {
    return this._items
  }

  get separator() {
    return this._separator
  }

  get selected() {
    return this._selected
  }

  get isActive() {
    return this._active
  }

  get icon(): string {
    return this._icon ?? ''
  }

  set icon(value: string) {
    this._icon = value
  }

  get label() {
    return this._label
  }

  get route() {
    return this._route
  }
}
