import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-nav',
  imports: [FontAwesomeModule, NgOptimizedImage],
  templateUrl: './footer-nav.html',
  styleUrl: './footer-nav.css'
})
export class FooterNav {
  faInstagram = faInstagram
}
