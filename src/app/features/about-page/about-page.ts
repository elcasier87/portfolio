import { Component } from '@angular/core';

import { About } from '../../shared/components/about/about';
import { Skills } from '../../shared/components/skills/skills';

@Component({
  selector: 'app-about-page',
  imports: [About, Skills],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {}
