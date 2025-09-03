import { Hero } from '@/app/shared/components/hero/hero'
import { HttpClient } from '@angular/common/http'
import { Component, inject, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import matter from 'gray-matter-browser'
import { forkJoin } from 'rxjs'
import { PostPreviewData } from '../../../application/types/PostPreviewData'
import { PostPreview } from '../../components/post-preview/post-preview'

type PostListResponse = {
  slugs: Array<string>
}

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
  imports: [Hero, FontAwesomeModule, PostPreview, RouterLink],
})
export class PostList implements OnInit {
  private http = inject(HttpClient)
  posts: Array<PostPreviewData> = []

  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowDown)
  }

  ngOnInit(): void {
    this.http.get<PostListResponse>('assets/data/posts/posts-data.json').subscribe({
      next: data => {
        const requests = data.slugs.map(slug =>
          this.http.get(`assets/data/posts/${slug}/post.md`, { responseType: 'text' }),
        )
        forkJoin(requests).subscribe({
          next: allPosts => {
            this.posts = allPosts.map(post => {
              const {
                title = '',
                subtitle = '',
                slug = '',
                thumbnail = '',
                author = '',
                publicationDate = '',
                tags = '',
                featured = false
              } = matter(post).data
              return { title, subtitle, slug, thumbnail, author, publicationDate, tags, featured }
            })
          },
          error: error => console.error(error),
        })
      },
      error: error => console.error(error),
    })
  }
}
