import { Routes } from '@angular/router'
import { ClubFoundationPage } from './presentation/pages/foundation/foundation'
import { ClubHistoryPage } from './presentation/pages/history/history'
import { ClubPalmaresPage } from './presentation/pages/palmares/palmares'
import { ClubPenasPage } from './presentation/pages/penas/penas'
import { ClubSponsorsPage } from './presentation/pages/sponsors/sponsors'

export const CLUB_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'foundation', component: ClubFoundationPage },
      { path: 'history', component: ClubHistoryPage },
      { path: 'palmares', component: ClubPalmaresPage },
      { path: 'sponsors', component: ClubSponsorsPage },
      { path: 'penas', component: ClubPenasPage },
    ],
  },
]
