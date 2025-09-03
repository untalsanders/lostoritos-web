import { Injectable, signal } from '@angular/core'
import { PostPreviewData } from '../types/PostPreviewData'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postPreviewData = signal<PostPreviewData>({
    title: '',
    subtitle: '',
    slug: '',
    thumbnail: '',
    author: '',
    publicationDate: '',
    tags: '',
  })
}
