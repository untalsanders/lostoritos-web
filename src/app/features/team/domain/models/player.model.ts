export interface Player {
  id: number;
  name: string;
  image?: string;
  dorsal?: number;
  position: 'Portero' | 'Defensa' | 'Centrocampista' | 'Delantero' | 'Entrenador';
}