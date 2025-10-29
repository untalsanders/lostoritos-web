import { Player } from '../../domain/models/player.model'

export interface RetrievePlayersUseCase {
  getPlayers(): Player[]
}
