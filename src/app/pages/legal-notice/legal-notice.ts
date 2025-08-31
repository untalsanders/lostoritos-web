import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.css',
})
export class LegalNotice {
  clubName = signal('LOS TORITOS')
}
