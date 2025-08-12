import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'custom-card',
  standalone: true,
  template: `
    <div>
      <ng-content select="card-title">Título por defecto</ng-content>
      <ng-content select="card-body">Contenido por defecto</ng-content>
      <ng-content />
    </div>
  `,
  host: {
    '(click)': 'updateValue($event)',
  },
})
export class CustomCard {
  updateValue(event: KeyboardEvent) {
    console.log(event)
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
