import { SupabaseService } from '@/app/core/services/supabase'
import { inject, Injectable } from '@angular/core'
import { SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _supabaseClient = inject(SupabaseService).supabaseClient

  session() {
    return this._supabaseClient.auth.getSession()
  }

  register(credentials: SignUpWithPasswordCredentials) {
    return this._supabaseClient.auth.signUp(credentials)
  }

  login(credentials: SignInWithPasswordCredentials) {
    return this._supabaseClient.auth.signInWithPassword(credentials)
  }

  logout() {
    return this._supabaseClient.auth.signOut({ scope: 'local' })
  }
}
