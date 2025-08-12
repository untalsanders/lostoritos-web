import { Routes } from '@angular/router'
import { ContactComponent } from './features/contact/contact.component'
import { NewsComponent } from './features/news/news.component'
import { TeamComponent } from './features/team/team.component'
import { HomeComponent } from './features/home/home.component'
import { MatchesComponent } from './features/matches/matches.component'
import { ClubComponent } from './features/club/club.component'
import { LegalNoticeComponent } from './features/legal-notice/legal-notice.component'
import { loginGuard } from './core/guards/login.guard'
import { Layout } from './shared/components/layout/layout'

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        title: 'Inicio',
        component: HomeComponent,
      },
      {
        path: 'team',
        title: 'Equipo',
        component: TeamComponent,
        canActivate: [loginGuard],
      },
      {
        path: 'matches',
        title: 'Partidos',
        component: MatchesComponent,
      },
      {
        path: 'news',
        title: 'Noticias',
        component: NewsComponent,
      },
      {
        path: 'club',
        title: 'Club',
        component: ClubComponent,
      },
      {
        path: 'contact',
        title: 'Contacto',
        component: ContactComponent,
      },
      {
        path: 'legal-notice',
        title: 'Aviso Legal',
        component: LegalNoticeComponent,
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
]
