import { Routes } from '@angular/router'
import { Register } from './register/register'
import { Login } from './login/login'
import { AuthLayout } from './auth-layout/auth-layout'

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
