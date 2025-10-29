import { Hero } from '@/app/shared/components/hero/hero'
import { CommonModule } from '@angular/common'
import { Component, inject, signal } from '@angular/core'
import { HttpPlayerService } from '../../../application/services/http-player.service'
import { Player } from '../../../domain/models/player.model'

@Component({
  selector: 'app-team.players',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class PlayersPage {
  players = signal<Player[]>([])

  private httpPlayerService = inject(HttpPlayerService)

  constructor() {
    this.players.set(this.httpPlayerService.getPlayers())
  }
}
