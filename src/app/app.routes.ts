import { Routes } from '@angular/router'
import { ContactComponent } from './contact/contact.component'
import { NewsComponent } from './news/news.component'
import { EquipoComponent } from './team/equipo.component'
import { HomeComponent } from './home/home.component'
import { MatchesComponent } from './matches/matches.component'

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    },
    {
        path: 'news',
        title: 'Noticias',
        component: NewsComponent,
    },
    {
        path: 'matches',
        title: 'Partidos',
        component: MatchesComponent,
    },
    {
        path: 'team',
        title: 'Equipo',
        component: EquipoComponent,
    },
    {
        path: 'contact',
        title: 'Contact Page',
        component: ContactComponent,
    },
]
