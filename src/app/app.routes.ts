import { Routes } from '@angular/router'
import { ContactComponent } from './contacto/contact.component'
import { SociosComponent } from './socios/socios.component'
import { ClubComponent } from './club/club.component'
import { EquipoComponent } from './equipo/equipo.component'

export const routes: Routes = [
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
