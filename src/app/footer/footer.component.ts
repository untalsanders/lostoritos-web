import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  faHeart = faHeart
  currentDate: number

  constructor() {
    this.currentDate = new Date().getFullYear()
  }
}
