import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import {} from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideAngularSvgIcon } from 'angular-svg-icon'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAngularSvgIcon(), provideHttpClient(withFetch(), withInterceptorsFromDi())],
}
