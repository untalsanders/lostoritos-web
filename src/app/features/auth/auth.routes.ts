import { Routes } from '@angular/router'
import { AuthLayout } from './presentation/components/auth-layout/auth-layout'
import { Login } from './presentation/components/login/login'
import { Register } from './presentation/components/register/register'

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'register', component: Register },
      { path: 'login', component: Login },
    ],
  },
]
