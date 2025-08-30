import { AuthService } from '@/app/features/auth/application/services/auth.service'
import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

const routerInjection = () => inject(Router)
const authService = () => inject(AuthService)

export const privateGuard: CanActivateFn = async () => {
  const router = routerInjection()
  const { data } = await authService().session()

  if (!data.session) {
    router.navigateByUrl('/auth/login')
  }

  return !!data.session
}

export const publicGuard = async () => {
  const router = routerInjection()
  const { data } = await authService().session()

  if (data.session) {
    router.navigateByUrl('/')
  }

  return !data.session
}
