import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FooterMain } from './footer-main/footer-main'
import { FooterMobileApps } from './footer-mobile-apps/footer-mobile-apps'
import { FooterNav } from './footer-nav/footer-nav'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, FooterMobileApps, FooterNav, FooterMain],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
