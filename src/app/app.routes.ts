import { Routes } from '@angular/router'
import { privateGuard, publicGuard } from './core/guards/auth.guard'
import { ClubComponent } from './features/club/club.component'
import { ContactComponent } from './features/contact/contact.component'
import { HomeComponent } from './features/home/home.component'
import { LegalNotice } from './pages/legal-notice/legal-notice'
import { MatchesComponent } from './features/matches/matches.component'
import { NewsComponent } from './features/news/news.component'
import { TeamComponent } from './features/team/team.component'
import { Layout } from './shared/components/layout/layout'

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', title: 'Inicio', component: HomeComponent },
      { path: 'team', title: 'Equipo', component: TeamComponent },
      { path: 'matches', title: 'Partidos', component: MatchesComponent },
      { path: 'news', title: 'Noticias', component: NewsComponent },
      { path: 'club', title: 'Club', component: ClubComponent },
      { path: 'contact', title: 'Contacto', component: ContactComponent },
      { path: 'legal-notice', title: 'Aviso Legal', component: LegalNotice },
    ],
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    // canActivate: [privateGuard],
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
  },
  {
    path: 'errors',
    loadChildren: () => import('./features/error/error.routes').then(m => m.ERROR_ROUTES),
  },
  { path: '**', redirectTo: 'errors/404' },
]
