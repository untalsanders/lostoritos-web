import { Component } from '@angular/core'
import { Hero } from '@/app/shared/components/hero/hero'

@Component({
  selector: 'app-matches',
  standalone: true,
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css',
  imports: [Hero],
})
export class MatchesComponent {}
