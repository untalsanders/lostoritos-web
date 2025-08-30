import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-main',
  imports: [RouterLink],
  templateUrl: './footer-main.html',
  styleUrl: './footer-main.css'
})
export class FooterMain {
  currentDate: number

  constructor() {
    this.currentDate = new Date().getFullYear()
  }
}
