import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Hero } from "@/app/shared/components/hero/hero";
import { PlayerService } from '../../../application/services/player.service';
import { Player } from '../../../domain/models/player.model';

@Component({
  selector: 'app-team.players',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class PlayersPage implements OnInit {
  players: Player[] = [];
  playersByPosition = new Map<string, Player[]>();

  constructor(private playerService: PlayerService) {}

  async ngOnInit() {
    try {
      this.players = await this.playerService.getPlayers();
      this.groupPlayersByPosition();
    } catch (error) {
      console.error('Error loading players:', error);
    }
  }

  private groupPlayersByPosition() {
    this.playersByPosition.clear();
    this.players.forEach(player => {
      if (!this.playersByPosition.has(player.position)) {
        this.playersByPosition.set(player.position, []);
      }
      this.playersByPosition.get(player.position)!.push(player);
    });
  }

  get positions(): string[] {
    return Array.from(this.playersByPosition.keys());
  }
}
