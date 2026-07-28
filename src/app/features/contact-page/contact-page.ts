import { Component } from '@angular/core';
import { UmamiService } from '../../core/services/umami.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPageComponent {

constructor(private umami: UmamiService) {}

trackGithub(project: string): void {
  this.umami.track(`${project} GitHub`);
}

trackLinkedIn(): void {
  this.umami.track('Open LinkedIn');
}

}
