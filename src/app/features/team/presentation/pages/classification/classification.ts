import { Hero } from '@/app/shared/components/hero/hero'
import { Component } from '@angular/core'

@Component({
  selector: 'app-team-classification',
  standalone: true,
  imports: [Hero],
  templateUrl: './classification.html',
  styleUrl: './classification.css',
})
export class ClassificationPage {}
