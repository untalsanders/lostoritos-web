import { Component } from '@angular/core'
import { Hero } from '@/app/shared/components/hero/hero'

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  imports: [Hero],
})
export class NewsComponent {}
