import { Routes } from '@angular/router'
import { LegalNoticePage } from './presentation/pages/legal-notice/legal-notice'
import { LegalPrivatePolicyPage } from './presentation/pages/legal-private-policy/legal-private-policy'

export const LEGAL_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'notice', component: LegalNoticePage },
      { path: 'private-policy', component: LegalPrivatePolicyPage },
    ],
  },
]
