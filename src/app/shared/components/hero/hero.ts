import { Component, input } from '@angular/core'

type HeroProps = {
  title: string
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  heroTitle = input<HeroProps['title']>('')
}
