import { Routes } from '@angular/router'
import { LegalNoticePage } from './legal-notice/legal-notice'
import { LegalPrivatePolicyPage } from './legal-private-policy/legal-private-policy'

export const LEGAL_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'notice', component: LegalNoticePage },
      { path: 'private-policy', component: LegalPrivatePolicyPage },
    ],
  },
]
