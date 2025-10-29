import { environment } from '@/environments/environment.prod'
import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Player } from '../../domain/models/player.model'
import { RetrievePlayersUseCase } from '../usecases/retrieve-players.usecase'

@Injectable({
  providedIn: 'root',
})
export class HttpPlayerService implements RetrievePlayersUseCase {
  private http = inject(HttpClient)
  private players: Player[] = []

  constructor() {
    const urlResource = `${environment.SUPABASE_URL}/rest/v1/players?apikey=${environment.SUPABASE_KEY}`
    this.http.get<Player[]>(urlResource).subscribe({
      next: data => this.setPlayers(data),
      error: err => console.error(err),
    })
  }

  getPlayers(): Player[] {
    return this.players
  }

  private setPlayers(players: any[]) {
    players.forEach(player => {
      this.players.push({
        id: player.id,
        firstName: player.first_name,
        lastName: player.last_name,
        birthdate: new Date(player.birthdate),
        height: player.height,
        weight: player.weight,
        dorsal: player.dorsal,
        position: player.position
      })
    })
  }
}
