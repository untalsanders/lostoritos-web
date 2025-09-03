import { NgClass, NgOptimizedImage } from '@angular/common'
import { Component, signal } from '@angular/core'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-sidebar-header',
  imports: [NgClass, SvgIconComponent, NgOptimizedImage],
  templateUrl: './sidebar-header.html',
  styleUrl: './sidebar-header.css',
})
export class SidebarHeader {
  showSidebarHeader = signal(true)

  toggleSidebarHeader() {
    this.showSidebarHeader.set(!this.showSidebarHeader())
  }
}
