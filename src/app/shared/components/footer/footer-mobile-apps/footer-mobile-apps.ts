import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer-mobile-apps',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer-mobile-apps.html',
  styleUrl: './footer-mobile-apps.css',
})
export class FooterMobileApps {
  faGooglePlay = faGooglePlay
  faApple = faApple
}
