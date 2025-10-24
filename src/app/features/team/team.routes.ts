import { Routes } from '@angular/router'
import { ClassificationPage } from './presentation/pages/classification/classification'
import { PlayersPage } from './presentation/pages/players/players'
import { ResultsPage } from './presentation/pages/results/results'

export const TEAM_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'players', component: PlayersPage },
      { path: 'results', component: ResultsPage },
      { path: 'classification', component: ClassificationPage },
    ],
  },
]
