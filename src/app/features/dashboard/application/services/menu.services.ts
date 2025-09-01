import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _showSidebar = signal(true)

  get showSidebar() {
    return this._showSidebar()
  }

  set showSidebar(value: boolean) {
    this._showSidebar.set(value)
  }

  toggleSidebar() {
    this._showSidebar.set(!this._showSidebar())
  }
}
