import { Hero } from '@/app/shared/components/hero/hero'
import { CommonModule } from '@angular/common'
import { Component, computed, inject, signal } from '@angular/core'
import { HttpPlayerService } from '../../../application/services/http-player.service'
import { Player } from '../../../domain/models/player.model'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-team.players',
  standalone: true,
  imports: [CommonModule, Hero, RouterLink],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class PlayersPage {
  players = signal<Player[]>([])

  goalkeepers = computed(() => this.players().filter(p => p.position === 'goalkeeper'))
  defenders = computed(() => this.players().filter(p => p.position === 'defender'))
  midfielders = computed(() => this.players().filter(p => p.position === 'midfielder'))
  forwards = computed(() => this.players().filter(p => p.position === 'forward'))

  private httpPlayerService = inject(HttpPlayerService)

  constructor() {
    this.players.set(this.httpPlayerService.getPlayers())
  }
}
