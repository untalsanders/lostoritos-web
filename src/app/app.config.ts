import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideAngularSvgIcon } from 'angular-svg-icon'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAngularSvgIcon(), provideHttpClient(withInterceptorsFromDi())],
}
