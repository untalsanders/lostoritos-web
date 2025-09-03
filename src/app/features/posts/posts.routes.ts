import { Routes } from '@angular/router'
import { PostList } from './presentation/pages/post-list/post-list'
import { PostDetails } from './presentation/pages/post-details/post-details'

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    component: PostList,
  },
  {
    path: ':postId',
    component: PostDetails,
  },
]
