import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faFacebook, faInstagram, faThreads, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-social-networks',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './social-networks.component.html',
    styleUrl: './social-networks.component.css',
})
export class SocialNetworksComponent {
    faTwitter = faTwitter
    faInstagram = faInstagram
    faYoutube = faYoutube
    faFacebook = faFacebook
    faTiktok = faTiktok
    faThreads = faThreads
    faHeart = faHeart
}
