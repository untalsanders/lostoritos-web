import { Hero } from '@/app/shared/components/hero/hero'
import { Component } from '@angular/core'

@Component({
  selector: 'app-club-sponsors',
  standalone: true,
  imports: [Hero],
  templateUrl: './sponsors.html',
  styleUrl: './sponsors.css',
})
export class ClubSponsorsPage {}
