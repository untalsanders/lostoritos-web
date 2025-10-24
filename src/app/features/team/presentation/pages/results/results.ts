import { Hero } from '@/app/shared/components/hero/hero'
import { Component } from '@angular/core'

@Component({
  selector: 'app-team-results',
  standalone: true,
  imports: [Hero],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class ResultsPage {}
