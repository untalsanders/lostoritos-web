import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faFacebook, faInstagram, faThreads, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { LogoSvgComponent } from '../logo-svg/logo-svg.component'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { MobileAppsComponent } from '../mobile-apps/mobile-apps.component'

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [FontAwesomeModule, LogoSvgComponent, MobileAppsComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {
    faTwitter = faTwitter
    faInstagram = faInstagram
    faYoutube = faYoutube
    faFacebook = faFacebook
    faTiktok = faTiktok
    faThreads = faThreads
    faHeart = faHeart
}
