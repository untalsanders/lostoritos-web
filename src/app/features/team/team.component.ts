import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Hero } from "@/app/shared/components/hero/hero";

interface Player {
  id: number
  name: string
  image?: string
  dorsal?: number
  position: 'Portero' | 'Defensa' | 'Centrocampista' | 'Delantero' | 'Entrenador'
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  private players: Player[] = [
    // Porteros
    {
      id: 1,
      name: 'Alejandro Astrada',
      image: 'https://placehold.co/400x500.png',
      dorsal: 1,
      position: 'Portero',
    },
    {
      id: 2,
      name: 'Felipe Daza',
      image: 'https://placehold.co/400x500.png',
      dorsal: 12,
      position: 'Portero',
    },

    // Defensas
    {
      id: 3,
      name: 'Marcos Gil',
      image: 'https://placehold.co/400x500.png',
      dorsal: 22,
      position: 'Defensa',
    },
    {
      id: 4,
      name: 'Emilio Quiroga',
      image: 'https://placehold.co/400x500.png',
      dorsal: 6,
      position: 'Defensa',
    },
    {
      id: 5,
      name: 'Maximiliano Vega',
      image: 'https://placehold.co/400x500.png',
      dorsal: 87,
      position: 'Defensa',
    },
    {
      id: 6,
      name: 'Ignacio Garbi',
      image: 'https://placehold.co/400x500.png',
      dorsal: 3,
      position: 'Defensa',
    },
    {
      id: 7,
      name: 'Sanders Gutiérrez',
      image: 'https://placehold.co/400x500.png',
      dorsal: 0,
      position: 'Defensa',
    },
    {
      id: 8,
      name: 'Martín Cáceres',
      image: 'https://placehold.co/400x500.png',
      dorsal: 78,
      position: 'Defensa',
    },
    {
      id: 9,
      name: 'Exequiel Ramírez',
      image: 'https://placehold.co/400x500.png',
      dorsal: 35,
      position: 'Defensa',
    },
    {
      id: 10,
      name: 'Gaspar Lia',
      image: 'https://placehold.co/400x500.png',
      dorsal: 80,
      position: 'Defensa',
    },
    {
      id: 11,
      name: 'Tomás Malki',
      image: 'https://placehold.co/400x500.png',
      dorsal: 66,
      position: 'Defensa',
    },
    {
      id: 12,
      name: 'Pablo Blanco',
      image: 'https://placehold.co/400x500.png',
      dorsal: 81,
      position: 'Defensa',
    },
    {
      id: 13,
      name: 'Sanders Gutiérrez',
      image: 'https://placehold.co/400x500.png',
      dorsal: 0,
      position: 'Defensa',
    },
    {
      id: 14,
      name: 'Alejo Florín',
      image: 'https://placehold.co/400x500.png',
      dorsal: 5,
      position: 'Defensa',
    },

    // Centrocampistas
    {
      id: 15,
      name: 'Harold Pimentel',
      image: 'https://placehold.co/400x500.png',
      dorsal: 11,
      position: 'Centrocampista',
    },
    {
      id: 16,
      name: 'Pedro Menedín',
      image: 'https://placehold.co/400x500.png',
      dorsal: 13,
      position: 'Centrocampista',
    },
    {
      id: 17,
      name: 'Alejandro Araujo',
      image: 'https://placehold.co/400x500.png',
      dorsal: 19,
      position: 'Centrocampista',
    },
    {
      id: 18,
      name: 'Renzo Stansiola',
      image: 'https://placehold.co/400x500.png',
      dorsal: 18,
      position: 'Centrocampista',
    },
    {
      id: 19,
      name: 'Emanuel Ramírez',
      image: 'https://placehold.co/400x500.png',
      dorsal: 17,
      position: 'Centrocampista',
    },
    {
      id: 10,
      name: 'Luis Sánchez',
      image: 'https://placehold.co/400x500.png',
      dorsal: 32,
      position: 'Centrocampista',
    },
    {
      id: 21,
      name: 'Nicolás Ferreiro',
      image: 'https://placehold.co/400x500.png',
      dorsal: 82,
      position: 'Centrocampista',
    },
    {
      id: 22,
      name: 'Hernán Banegaz',
      image: 'https://placehold.co/400x500.png',
      dorsal: 83,
      position: 'Centrocampista',
    },
    {
      id: 23,
      name: 'Ariel Joaquínn',
      image: 'https://placehold.co/400x500.png',
      dorsal: 77,
      position: 'Centrocampista',
    },
    {
      id: 24,
      name: 'Nicolás Agopian',
      image: 'https://placehold.co/400x500.png',
      dorsal: 84,
      position: 'Centrocampista',
    },

    // Delanteros
    {
      id: 25,
      name: 'Dany García',
      image: 'https://placehold.co/400x500.png',
      dorsal: 9,
      position: 'Delantero',
    },
    {
      id: 26,
      name: 'Juan Cruz Sagarna',
      image: 'https://placehold.co/400x500.png',
      dorsal: 30,
      position: 'Delantero',
    },
    {
      id: 27,
      name: 'Cristián Ardito',
      image: 'https://placehold.co/400x500.png',
      dorsal: 7,
      position: 'Delantero',
    },
    {
      id: 28,
      name: 'Facundo Cánovas',
      image: 'https://placehold.co/400x500.png',
      dorsal: 15,
      position: 'Delantero',
    },
    {
      id: 29,
      name: 'Facundo Rossi',
      image: 'https://placehold.co/400x500.png',
      dorsal: 85,
      position: 'Delantero',
    },

    // Entrenador
    {
      id: 30,
      name: 'Sanders Gutiérrez',
      image: 'https://placehold.co/400x500.png',
      dorsal: 0,
      position: 'Entrenador',
    },
  ]

  playersByPosition = new Map<string, Player[]>([
    ['Portero', [this.players[0], this.players[1]]],
    [
      'Defensa',
      [
        this.players[2],
        this.players[3],
        this.players[4],
        this.players[5],
        this.players[6],
        this.players[7],
        this.players[8],
        this.players[9],
        this.players[10],
        this.players[11],
        this.players[12],
        this.players[13],
      ],
    ],
    [
      'Centrocampista',
      [
        this.players[14],
        this.players[15],
        this.players[16],
        this.players[17],
        this.players[18],
        this.players[19],
        this.players[20],
        this.players[21],
        this.players[22],
        this.players[23],
        this.players[24],
      ],
    ],
    ['Delantero', [this.players[25], this.players[26], this.players[27], this.players[28], this.players[29]]],
    ['Entrenador', [this.players[30]]],
  ])

  get positions(): string[] {
    return Array.from(this.playersByPosition.keys())
  }
}
