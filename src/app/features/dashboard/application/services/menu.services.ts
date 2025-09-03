import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { MenuItem } from '../domain/models/MenuItem'

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _http = inject(HttpClient)
  private _items: MenuItem[] = []

  constructor() {
    const urlResource = 'assets/data/menus/menu-sidebar.json'
    this._http.get<MenuItem[]>(urlResource).subscribe({
      next: data => this.setItems(data),
    })
  }

  private setItems(items: MenuItem[]) {
    items.forEach(item => this._items.push(item))
  }

  getItems() {
    return this._items
  }
}
