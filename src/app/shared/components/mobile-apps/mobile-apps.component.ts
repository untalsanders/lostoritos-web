import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-mobile-apps',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './mobile-apps.component.html',
  styleUrl: './mobile-apps.component.css',
})
export class MobileAppsComponent {
  faGooglePlay = faGooglePlay
  faApple = faApple
}
