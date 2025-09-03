import { PostService } from '@/features/posts/application/services/post.service'
import { HttpClient } from '@angular/common/http'
import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import matter from 'gray-matter-browser'
import MarkdownIt from 'markdown-it'
import { PostPreviewData } from '../../../application/types/PostPreviewData'
import { PostHero } from '../../components/post-hero/post-hero'

@Component({
  selector: 'app-post-details',
  imports: [PostHero],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails implements OnInit {
  private router = inject(Router)
  private http = inject(HttpClient)
  private activatedRoute = inject(ActivatedRoute)
  private md = MarkdownIt()
  postData: PostPreviewData | undefined
  postContent = ''

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('postId')
    this.http.get(`assets/data/posts/${slug}/post.md`, { responseType: 'text' }).subscribe({
      next: data => this.managerMarkdownFileData(data),
      error: error => {
        if (error?.status === 400) {
          this.router.navigateByUrl('/')
        }
      },
    })
  }

  managerMarkdownFileData(markdownFile: string | undefined): void {
    if (!markdownFile) return

    const matterObj = matter(markdownFile)
    const { title = '', subtitle = '', thumbnail = '', slug = '', author = '', publicationDate = '' } = matterObj.data
    const postPreviewData: PostPreviewData = {
      title,
      subtitle,
      thumbnail,
      slug,
      author,
      publicationDate,
    }
    this.postData = postPreviewData
    this.postContent = this.md.render(matterObj.content)
  }
}
