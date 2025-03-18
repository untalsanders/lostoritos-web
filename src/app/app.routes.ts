import { Routes } from '@angular/router'
import { ContactComponent } from './contacto/contact.component'
import { SociosComponent } from './socios/socios.component'
import { ClubComponent } from './club/club.component'
import { EquipoComponent } from './equipo/equipo.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    },
    {
        path: 'club',
        title: 'Club',
        component: ClubComponent,
    },
    {
        path: 'equipo',
        title: 'Equipo',
        component: EquipoComponent,
    },
    {
        path: 'contact',
        title: 'Contact Page',
        component: ContactComponent,
    },
    {
        path: 'socios',
        title: 'Socios',
        component: SociosComponent,
    }
]
