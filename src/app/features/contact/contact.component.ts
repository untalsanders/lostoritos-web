import { Component } from '@angular/core';
import { Hero } from "@/app/shared/components/hero/hero";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [Hero],
})
export class ContactComponent {}
