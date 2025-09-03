import { Routes } from '@angular/router'
import { DashboardLayout } from './presentation/components/dashboard-layout/dashboard-layout'
import { AdminDashboard } from './presentation/components/admin-dashboard/admin-dashboard'

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardLayout,
    children: [{ path: '', component: AdminDashboard }],
  },
]
