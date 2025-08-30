import { Routes } from '@angular/router'
import { AdminLayout } from './presentation/components/admin-layout/admin-layout'
import { Dashboard } from './presentation/components/dashboard/dashboard'

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [{ path: '', component: Dashboard }],
  },
]
