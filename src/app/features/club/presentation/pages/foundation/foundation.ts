import { Hero } from '@/app/shared/components/hero/hero'
import { Component } from '@angular/core'

@Component({
  selector: 'app-club-foundation',
  standalone: true,
  imports: [Hero],
  templateUrl: './foundation.html',
  styleUrl: './foundation.css',
})
export class ClubFoundationPage {}
