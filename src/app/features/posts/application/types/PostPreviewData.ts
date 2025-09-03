import { Post } from '../models/Post'

export type PostPreviewData = Pick<
  Post,
  'title' | 'subtitle' | 'slug' | 'thumbnail' | 'author' | 'publicationDate' | 'tags' | 'featured'
>
