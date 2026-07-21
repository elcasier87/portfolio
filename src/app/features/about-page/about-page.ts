import { Component } from '@angular/core';

import { AboutHeroComponent } from './components/about-hero/about-hero';
import { AboutHistoryComponent } from './components/about-history/about-history';
import { AboutTechnologiesComponent } from './components/about-technologies/about-technologies';
import { AboutWorkStyleComponent } from './components/about-work-style/about-work-style';
import { AboutHobbiesComponent } from './components/about-hobbies/about-hobbies';
import { AboutQuoteComponent } from './components/about-quote/about-quote';

@Component({
  selector: 'app-about-page',
  imports: [
    AboutHeroComponent,
    AboutHistoryComponent,
    AboutTechnologiesComponent,
    AboutWorkStyleComponent,
    AboutHobbiesComponent,
    AboutQuoteComponent
  ],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPageComponent {

}
