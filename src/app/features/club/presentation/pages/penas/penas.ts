import { Hero } from '@/app/shared/components/hero/hero'
import { Component } from '@angular/core'

@Component({
  selector: 'app-club-penas',
  standalone: true,
  imports: [Hero],
  templateUrl: './penas.html',
  styleUrl: './penas.css',
})
export class ClubPenasPage {}
