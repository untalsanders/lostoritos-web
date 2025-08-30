import { Button } from '@/app/shared/components/button/button'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [SvgIconComponent, Button],
  templateUrl: './error-404.html',
  styleUrl: './error-404.css',
})
export class Error404 {
  private _router = inject(Router)

  goToHomePage() {
    this._router.navigateByUrl('/')
  }
}
