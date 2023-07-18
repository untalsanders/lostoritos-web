import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [HeroComponent],
})
export class AppComponent {}
