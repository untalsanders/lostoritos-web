import { Injectable } from '@angular/core';
import { SupabaseService } from '@/app/core/services/supabase';
import { Player } from '../../domain/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private supabaseService: SupabaseService) {}

  async getPlayers(): Promise<Player[]> {
    const { data, error } = await this.supabaseService.supabaseClient
      .from('players')
      .select('*');

    if (error) {
      throw new Error(`Error fetching players: ${error.message}`);
    }

    return data as Player[];
  }
}