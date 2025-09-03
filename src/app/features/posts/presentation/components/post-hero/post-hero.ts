import { Component, input } from '@angular/core'

type PostHeroProp = {
  title: string
  thumbnail: string
}

@Component({
  selector: 'app-post-hero',
  imports: [],
  templateUrl: './post-hero.html',
  styleUrl: './post-hero.css',
})
export class PostHero {
  title = input<PostHeroProp['title']>('')
  thumbnail = input<PostHeroProp['thumbnail']>('')
}
