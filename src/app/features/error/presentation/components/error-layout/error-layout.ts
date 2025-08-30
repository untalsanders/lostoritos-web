import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-error-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './error-layout.html',
  styleUrl: './error-layout.css',
})
export class ErrorLayout {}
