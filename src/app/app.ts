import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Only scroll to top if not navigating to an anchor (e.g., #contact)
      if (!event.urlAfterRedirects.includes('#')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
