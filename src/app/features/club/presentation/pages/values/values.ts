import { Hero } from '@/app/shared/components/hero/hero'
import { Component } from '@angular/core'

@Component({
  selector: 'app-club-values',
  standalone: true,
  imports: [Hero],
  templateUrl: './values.html',
  styleUrl: './values.css',
})
export class ClubValuesPage {}
