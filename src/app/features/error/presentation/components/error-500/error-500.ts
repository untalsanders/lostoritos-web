import { Button } from '@/app/shared/components/button/button'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-error-500',
  imports: [SvgIconComponent, Button],
  templateUrl: './error-500.html',
  styleUrl: './error-500.css',
})
export class Error500 {
  private _router = inject(Router)

  goToHomePage() {
    this._router.navigateByUrl('/')
  }
}
