import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-dashboard-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard-footer.html',
  styleUrl: './dashboard-footer.css',
})
export class DashboardFooter {
  year: number = new Date().getFullYear()
}
