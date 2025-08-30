import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faTwitter, faInstagram, faYoutube, faFacebook, faTiktok, faThreads } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer-social',
  imports: [FontAwesomeModule, NgOptimizedImage],
  templateUrl: './footer-social.html',
  styleUrl: './footer-social.css',
})
export class FooterSocial {
  faTwitter = faTwitter
  faInstagram = faInstagram
  faYoutube = faYoutube
  faFacebook = faFacebook
  faTiktok = faTiktok
  faThreads = faThreads
  faHeart = faHeart
}
