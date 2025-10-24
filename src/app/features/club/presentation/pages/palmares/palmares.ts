import { Hero } from '@/app/shared/components/hero/hero'
import { Component } from '@angular/core'

@Component({
  selector: 'app-club-palmares',
  standalone: true,
  imports: [Hero],
  templateUrl: './palmares.html',
  styleUrl: './palmares.css',
})
export class ClubPalmaresPage {}
