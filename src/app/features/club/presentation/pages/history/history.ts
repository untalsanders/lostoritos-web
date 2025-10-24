import { Hero } from '@/app/shared/components/hero/hero'
import { Component } from '@angular/core'

@Component({
  selector: 'app-club-history',
  standalone: true,
  imports: [Hero],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class ClubHistoryPage {}
