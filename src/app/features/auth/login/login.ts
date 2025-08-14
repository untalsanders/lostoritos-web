import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router'
import { AuthService } from '../application/services/auth.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private _authService = inject(AuthService)
  private _router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  async submit() {
    try {
      if (this.loginForm.invalid) throw new Error('invalid form')
      const { email, password } = this.loginForm.value
      if (email && password) {
        const authResponse = await this._authService.login({ email, password })
        if (authResponse.error) throw authResponse.error
        this._router.navigateByUrl('/')
      }
    } catch (error) {
      console.error(error)
    }
  }
}
