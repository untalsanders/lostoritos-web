import { Component } from '@angular/core'
import { Hero } from "@/app/shared/components/hero/hero";

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [Hero],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css',
})
export class ClubComponent {}
