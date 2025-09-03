import { Component, input, InputSignal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { PostPreviewData } from '../../../application/types/PostPreviewData'

@Component({
  selector: 'app-post-preview',
  imports: [RouterLink],
  templateUrl: './post-preview.html',
  styleUrl: './post-preview.css',
})
export class PostPreview {
  post: InputSignal<PostPreviewData> = input({
    title: '',
    subtitle: '',
    slug: '',
    thumbnail: '',
    author: '',
    publicationDate: '',
  })
}
