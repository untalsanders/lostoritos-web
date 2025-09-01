import { Component } from '@angular/core'
import { ProfileMenu } from './profile-menu/profile-menu'

@Component({
  selector: 'app-dashboard-navbar',
  imports: [ProfileMenu],
  templateUrl: './dashboard-navbar.html',
  styleUrl: './dashboard-navbar.css',
})
export class DashboardNavbar {}
