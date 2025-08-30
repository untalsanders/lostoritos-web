import { Routes } from '@angular/router'
import { Error404 } from './presentation/components/error-404/error-404'
import { Error500 } from './presentation/components/error-500/error-500'
import { ErrorLayout } from './presentation/components/error-layout/error-layout'

export const ERROR_ROUTES: Routes = [
  {
    path: '',
    component: ErrorLayout,
    children: [
      { path: '', redirectTo: '404', pathMatch: 'full' },
      { path: '404', component: Error404 },
      { path: '500', component: Error500 },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
]
