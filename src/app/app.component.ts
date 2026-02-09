import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROFILE } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  profile = PROFILE;
  private router = inject(Router);

  constructor() {
    // close mobile menu on navigation
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const el = document.getElementById('mobileMenu');
        if (el) el.removeAttribute('open');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
