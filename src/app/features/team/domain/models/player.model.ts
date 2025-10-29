export interface Player {
  id: number
  firstName: string
  lastName?: string
  birthdate: Date
  height: number
  weight: number
  dorsal?: number
  position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'
}
