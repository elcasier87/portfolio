import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UmamiService } from '../../../core/services/umami.service';// Ajusta la ruta si fuera distinta

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {

  private readonly umami = inject(UmamiService);

  trackDownloadCV(): void {
    this.umami.track('Download CV');
  }

}
