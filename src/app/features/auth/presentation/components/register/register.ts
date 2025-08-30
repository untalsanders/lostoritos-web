import { AuthService } from '@/features/auth/application/services/auth.service'
import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  providers: [AuthService],
})
export class Register {
  private _authService = inject(AuthService)

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  async submit() {
    try {
      if (this.registerForm.invalid) throw new Error('invalid form')
      const { email, password } = this.registerForm.value
      if (email && password) {
        const authResponse = await this._authService.register({ email, password })
        if (authResponse.error) throw authResponse.error
        alert('Su registro ha sido completado satisfactoriamente!')
      }
    } catch (error) {
      console.error(error)
    }
  }
}
