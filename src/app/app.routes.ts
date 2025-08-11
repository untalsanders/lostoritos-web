import { Routes } from '@angular/router'
import { ContactComponent } from './contact/contact.component'
import { NewsComponent } from './news/news.component'
import { TeamComponent } from './team/team.component'
import { HomeComponent } from './home/home.component'
import { MatchesComponent } from './matches/matches.component'
import { ClubComponent } from './club/club.component'
import { LegalNoticeComponent } from './legal-notice/legal-notice.component'
import { loginGuard } from './core/guards/login.guard'

export const routes: Routes = [
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
]
