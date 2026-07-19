import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { FeaturedProject } from '../../shared/components/featured-project/featured-project';
import { Skills } from '../../shared/components/skills/skills';
import { CallToAction } from '../../shared/components/call-to-action/call-to-action';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedProject, Skills, CallToAction],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
