import { Component } from '@angular/core';

import { HeroComponent } from '../../shared/components/hero/hero';
import { FeaturedProjectComponent } from '../../shared/components/featured-project/featured-project';
import { SkillsComponent } from '../../shared/components/skills/skills';
import { CallToActionComponent } from '../../shared/components/call-to-action/call-to-action';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    FeaturedProjectComponent,
    SkillsComponent,
    CallToActionComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
