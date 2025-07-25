import { Routes } from '@angular/router'
import { ContactComponent } from './contact/contact.component'
import { NewsComponent } from './news/news.component'
import { TeamComponent } from './team/team.component'
import { HomeComponent } from './home/home.component'
import { MatchesComponent } from './matches/matches.component'
import { NavbarComponent } from './navbar/navbar.component'
import { ClubComponent } from './club/club.component'

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    },
    {
        path: 'team',
        title: 'Equipo',
        component: TeamComponent,
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
        title: 'Contact Page',
        component: ContactComponent,
    },
]
